import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllChannelMessagesThunk } from "../../../store/message";

const MessagesIndex = () => {

    const dispatch = useDispatch();
    const activeChannel = useSelector(state => state.activeChannel)
    const obj = useParams();

    useEffect(() => {
        // TODO: dispatch thunk to get current messages
        dispatch(getAllChannelMessagesThunk());
    }, [dispatch])

    const messages = useSelector((state) => Object.values(state.messages));

    if (!messages) return (
        <h1>Loading...</h1>
    )

    console.log(activeChannel)
    console.log(messages)
    console.log(obj)

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

export default MessagesIndex;