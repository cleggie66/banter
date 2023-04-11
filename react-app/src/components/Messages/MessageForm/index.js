import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createMessageThunk } from "../../../store/message";

const MessageForm = () => {
    const dispatch = useDispatch()
    const [content, setContent] = useState('');
    const [channelId, setChannelId] = useState(0);

    const handleSubmit = async (e) => {
        e.preventDefault()

        const payload = {
            content,
            channel_id: channelId
        }

        // TODO: Dispatch Thunk to create message

    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="textarea"
                placeholder="Type your message here..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <input
                type="number"
                label="channel id"
                value={channelId}
                onChange={(e) => setChannelId(e.target.value)}
            />
        </form>
    )
}