import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createMessageThunk } from "../../../store/message";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
        <div className="create-message-form">
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
                TEST
                <FontAwesomeIcon
                icon="fa-solid fa-paper-plane-top"
                className="create-message-icon"
                />
                </button>
        </div>
    )
}

export default MessageForm