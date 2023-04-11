import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import "./ChannelsIndex.css";

const ChannelsIndex = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        // TODO: dispatch thunk to get current messages
        // dispatch(getAllChannels());
    }, [dispatch])

    // TODO: Update to new state after merge
    const messages = useSelector((state) => Object.values(state.messages));

    if (!messages) return null;

    return (
        <>
            <h1>Messages</h1>
            <div>
                {messages.map((message) => (
                    <h2 key={message.id}># {message.content}</h2>
                ))}
            </div>
        </>
    )
}

export default ChannelsIndex;