import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createMessageThunk } from "../../../store/message";
import "./MessageForm.css"

const MessageForm = () => {
    const activeChannel = useSelector((state) => state.activeChannel);

    const dispatch = useDispatch();
    const [content, setContent] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault()

        const payload = {
            content,
            channel_id: activeChannel.id
        }
        console.log(payload)

        dispatch(createMessageThunk(payload))
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="textarea"
                placeholder="Type your message here..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <button type="submit">Send Message</button>
        </form>
    )
}

export default MessageForm