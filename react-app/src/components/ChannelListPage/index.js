import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllChannels } from "../../store/channel";
import "./ChannelListForm.css";

function ListChannels() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllChannels());
    }, [dispatch])
    
    const channels = useSelector((state) => Object.values(state.channels.allChannels));
    console.log("channels:" + channels)

    if (!channels) return null;

    // const channelsList = channels.map((channel) => (
    //     <div key={channel.id}>{channel.name}</div>
    // ))


    return (
        <>
            <h1>Channels</h1>
                <div>
                    {channels.map((channel) => (
                        <h2>{channel.name}</h2>
                    ))}
                </div>
        </>
    )
}

export default ListChannels;