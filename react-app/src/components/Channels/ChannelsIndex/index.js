import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getAllChannels } from "../../../store/channel";
import "./ChannelsIndex.css";

const ChannelsIndex = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllChannels());
    }, [dispatch])

    const channels = useSelector((state) => Object.values(state.channels));

    if (!channels) return null;

    return (
        <>
            <h1>Channels</h1>
            <div>
                {channels.map((channel) => (
                    <h2 key={channel.id}># {channel.name}</h2>
                ))}
                <h2>Create New Channel</h2>
            </div>
        </>
    )
}

export default ChannelsIndex;