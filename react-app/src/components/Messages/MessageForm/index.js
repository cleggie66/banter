import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createMessageThunk } from "../../../store/message";
import "./MessageForm.css"
import {io} from 'socket.io-client';
import MessagesIndex from "../MessagesIndex";
import { loadActiveChannelThunk } from "../../../store/activeChannel";
import { clearActiveChannelThunk } from "../../../store/activeChannel";

let socket;

const MessageForm = () => {
    const activeChannel = useSelector((state) => state.activeChannel);
    const user = useSelector((state) => state.session.user);

    const dispatch = useDispatch();
    const [content, setContent] = useState('');
    const [messages, setMessages] = useState([])

    useEffect(() => {
        dispatch(loadActiveChannelThunk(activeChannel?.id))
    }, [dispatch, activeChannel.id])

    useEffect(() => {
        socket = io();
        socket.on("chat", (chat) => {
            // when we recieve a chat, add it into our messages array in state
            setMessages(messages => [...messages, chat])
        })
        return (() => {
            socket.disconnect()
        })
    }, [activeChannel?.id, user])


    const handleSubmit = async (e) => {
        e.preventDefault()

        const payload = {
            content,
            channel_id: activeChannel?.id
        }


        let res = await dispatch(createMessageThunk(payload))
        if (res) {
            if (socket) {
                socket.emit("chat", {id: res.id, userId: user.id, channelId: activeChannel?.id, username: user.username, msg: content, profilePic: user.profile_picture, firstName: user.first_name, lastName: user.last_name});
            }
            setContent("")
        }
    }


    return (
        <>
         <MessagesIndex newMessages={messages}/>
        <div className="create-message-form">
            <form onSubmit={handleSubmit} id="form-1">
                <input
                    type="textarea"
                    placeholder="Type your message here..."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
            </form>

            <button type="submit" form="form-1">Send Message</button>
        </div>

        </>
    )
}

export default MessageForm
