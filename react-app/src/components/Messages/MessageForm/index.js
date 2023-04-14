import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createMessageThunk } from "../../../store/message";
import { refreshActiveChannelMessages } from "../../../store/activeChannel";
import "./MessageForm.css"

const MessageForm = ({activeChannel}) => {
    // const activeChannel = useSelector((state) => state.activeChannel);

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
                    type="textarea"
                    placeholder="Type your message here..."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
            </form>
            <button type="submit" form="form-1">Send Message</button>
        </div>
    )
}

export default MessageForm
