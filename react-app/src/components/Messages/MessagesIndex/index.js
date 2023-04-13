import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingIcon from "../../LoadingPage/LoadingIcon";
import "./MessagesIndex.css"

const MessagesIndex = () => {
    const sessionUser = useSelector((state) => state.session.user);
    const activeChannel = useSelector(state => state.activeChannel);
    const messages = activeChannel.channel_messages

    if (!messages) return (
        <LoadingIcon />
    )

    return (
        <div>
            {messages.map((message) => (
                <div key={message.id} className="message">
                    <div className='image-container'>
                        <img
                            src={message.message_owner.profile_picture}
                            alt="profile"
                            className="message-profile-pic"
                        />
                    </div>
                    <div className="message-details">
                        <h4>{message.message_owner.first_name}</h4>
                        <p>{message.content}</p>
                    </div>
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
    )
}

export default MessagesIndex;