import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingIcon from "../../LoadingPage/LoadingIcon";
import "./MessagesIndex.css"
import { getAllChannelMessagesThunk } from "../../../store/message";


const MessagesIndex = ({newMessages}) => {
    const sessionUser = useSelector((state) => state.session.user);
    const activeChannel = useSelector(state => state.activeChannel);
    const allMessages = activeChannel.channel_messages

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllChannelMessagesThunk(activeChannel?.id))
    }, [activeChannel?.id, allMessages, dispatch ])


    if (!allMessages) return (
        <LoadingIcon />
    )

    let arr;
    if (allMessages && newMessages) {
        arr = [...allMessages, ...newMessages]
    }

    let uniqueIds = {};

    let noDupes;
    if (arr) {
        noDupes = arr.filter(message => {
            if (!uniqueIds[message.id]) {
                uniqueIds[message.id] = true
                return true
            }
            return false
        })
    }


    let channelFiltered;
    if (noDupes) {
        channelFiltered = noDupes.filter(message => {
            return (message.channelId == activeChannel?.id) || (message.channel_id == activeChannel?.id)
        })
    }


    let sortedMessages = channelFiltered?.sort((a, b) => a.id - b.id)


    return (
        <div>
            {sortedMessages?.map((message) => (
                <div key={message.id} className="message">
                    <div className="message-content">
                        <div className='image-container'>
                            <img
                                src={message?.message_owner?.profile_picture || message.profilePic}
                                alt="profile"
                                className="message-profile-pic"
                            />
                        </div>
                        <div className="message-details">
                            <h4>{message?.message_owner?.first_name || message?.firstName}</h4>
                            <p>{message?.content || message?.msg}</p>
                        </div>
                    </div>
                    {
                        // TODO: Add functionality for edit and delete
                        (sessionUser.id === message.message_owner?.id || sessionUser.id == message.userId) && (
                            <div className="message-buttons">
                                <button>Edit</button>
                                <button>Delete</button>
                            </div>
                        )}
                </div>
            ))}
        </div>
    )
}

export default MessagesIndex;
