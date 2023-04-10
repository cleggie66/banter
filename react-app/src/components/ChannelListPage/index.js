import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./ChannelListForm.css";

function ListChannels() {

    const channels = useSelector((state) => Object.values(state.channels));

    if (!channels) return null;

    const channelsList = channels.map((channel) => (
        <div key={channel.id} channel={channel}></div>
    ))

    return (
        <>
            <h1>Channels</h1>
                <div>
                    {channelsList}
                </div>
        </>
    )
}

export default ListChannels