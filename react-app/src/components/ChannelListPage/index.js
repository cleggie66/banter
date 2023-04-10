import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./ChannelListForm.css";

function ListChannels() {

    const channels = useSelector((state) => Object.values(state.channels));

    if (!channels) return null;

    return (
        <>
            <h1>Channels</h1>

        </>
    )
}

export default ListChannels