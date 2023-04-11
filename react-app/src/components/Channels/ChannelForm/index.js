import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

const ChannelForm = () => {
    const dispatch = useDispatch()
    const [name, setName] = useState('');
    const [isChannel, setIsChannel] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault()

        const payload = {
            name,
            isChannel
        }

        // TODO: Dispatch Thunk to create channel
        // TODO: Dispatch Thunk to add channel members

        return <Redirect to="/" />
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="radio"
                label="Is this a channel?"
                value={isChannel}
                onChange={(e) => setIsChannel(e.target.value)}
            />
        </form>
    )
}