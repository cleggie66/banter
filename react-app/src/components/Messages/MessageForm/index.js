import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createMessageThunk } from "../../../store/message";
import "./MessageForm.css"
import {io} from 'socket.io-client';

let socket;

const MessageForm = () => {
    const activeChannel = useSelector((state) => state.activeChannel);
    const user = useSelector((state) => state.session.user);

    const dispatch = useDispatch();
    const [content, setContent] = useState('');
    const [messages, setMessages] = useState([])
    const [chatInput, setChatInput] = useState("");


    useEffect(() => {
        socket = io();
        socket.on("chat", (chat) => {
            // when we recieve a chat, add it into our messages array in state
            setMessages(messages => [...messages, chat])
        })
        return (() => {
            socket.disconnect()
        })
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const payload = {
            content,
            channel_id: activeChannel.id
        }
        console.log(payload)

        dispatch(createMessageThunk(payload))
    }

    const updateChatInput = (e) => {
        setChatInput(e.target.value)
    };

    const sendChat = (e) => {
        e.preventDefault()
        // emit a message
        socket.emit("chat", { user: user.username, msg: chatInput });
        // clear the input field after the message is sent
        setChatInput("")
    }

    return (
        <div className="create-message-form">
            <form onSubmit={handleSubmit} id="form-1">
                <input
                    type="textarea"
                    placeholder="Type your message here..."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
            </form>

            {/* WEBSOCKET FORM */}
         <form onSubmit={sendChat}>
         <input
        value={chatInput}
        onChange={updateChatInput}
        />
        <button type="submit">Send</button>
        </form>

            <button type="submit" form="form-1">Send Message</button>
        </div>
    )
}

export default MessageForm
