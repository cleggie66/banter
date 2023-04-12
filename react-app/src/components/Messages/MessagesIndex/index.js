import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const MessagesIndex = () => {
    const sessionUser = useSelector((state) => state.session.user);
    const activeChannel = useSelector(state => state.activeChannel)
    const messages = activeChannel.channel_messages

    if (!messages) return (
        <h1>Loading...</h1>
    )

    return (
        <>
            <h1>Messages</h1>
            <div>
                {messages.map((message) => (
                    <div key={message.id}>
                        <img src={message.message_owner.profile_picture} alt="profile"></img>
                        <h4>{message.message_owner.first_name}</h4>
                        <h2>{message.content}</h2>
                        {
                            // TODO: Add functionality for edit and delete
                        sessionUser.id === message.message_owner.id && (
                            <>
                                <button>Edit</button>
                                <button>Delete</button>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </>
    )
}

export default MessagesIndex;