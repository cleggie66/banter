import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getAllChannelsThunk } from "../../../store/channel";
import "./ChannelListForm.css";
import ChannelCard from "./ChannelCard";

const ListChannels = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllChannelsThunk());
    }, [dispatch])

    const allChannels = useSelector((state) => Object.values(state.channels));

    if (!allChannels) return null;

    return (
        <>
            <h1>Channels</h1>
                <div>
                    {allChannels.map((channel) => (
                        <ChannelCard key={channel.id} channel={channel}/>
                    ))}
                </div>
        </>
    )
}

export default ListChannels;
