import { useState } from "react";
import { useDispatch } from "react-redux";
import { createMessageThunk } from "../../../store/message";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { refreshActiveChannelMessages } from "../../../store/activeChannel";
import "./MessageForm.css"

const MessageForm = ({activeChannel}) => {

    

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
    dispatch(refreshActiveChannelMessages(activeChannel.Id))    

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
                <FontAwesomeIcon
                icon={faPaperPlane}
                className="create-message-icon"
                />
                </button>
        </div>
    )
}

export default MessageForm
