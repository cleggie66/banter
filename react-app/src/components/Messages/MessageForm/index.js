import { useState } from "react";
import { useDispatch } from "react-redux";
import { createMessageThunk } from "../../../store/message";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import "./MessageForm.css"
import { io } from 'socket.io-client';
import { loadActiveChannel } from "../../../store/activeChannel";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import MessagesIndex from "../MessagesIndex";


let socket;

const MessageForm = ({activeChannel}) => {

    const user = useSelector((state) => state.session.user);

    const dispatch = useDispatch();
    const [content, setContent] = useState('');
    const [messages, setMessages] = useState([])

    useEffect(() => {
        dispatch(loadActiveChannel(activeChannel?.id))
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
        <div className="create-message-form">
            {false && <MessagesIndex newMessages={messages}/>}
            <form onSubmit={handleSubmit} id="form-1">
                <input
                    className="create-message-input"
                    type="textarea"
                    placeholder="Type your message here..."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
            </form>
            <button
            className="create-message-button"
            type="submit"
            form="form-1">
                <FontAwesomeIcon
                icon={faPaperPlane}
                className="create-message-icon"
                />
                </button>
        </div>
    )
}

export default MessageForm
