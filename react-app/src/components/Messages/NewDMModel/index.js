import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useModal } from "../../../context/Modal";
import { signUp } from "../../../store/session";
import { getWorkspaceByIdThunk } from "../../../store/workspace";
import { addUserToChannelThunk, createChannelThunk } from "../../../store/channel";
import "./NewDMModel.css"

function NewDMModal({ workspaceId }) {
    const dispatch = useDispatch();
    const [recipients, setRecipients] = useState([])

    useEffect(() => {
        dispatch(getWorkspaceByIdThunk(workspaceId));
    }, [dispatch, workspaceId]);


    const activeWorkspaceState = useSelector((state) => state.workspaces);
    const activeWorkspace = activeWorkspaceState[workspaceId];
    const users = activeWorkspace.users_in_workspaces

    const { closeModal } = useModal();

    const handleSubmit = async () => {
        const channelInformation = {
            name: "name",
            workspace_id: Number(workspaceId),
            is_channel: false,
        };

        let newChannel = await dispatch(createChannelThunk(channelInformation));

        recipients.forEach(async (user) => {
            await dispatch(addUserToChannelThunk(user.id, newChannel.id))
        })

        closeModal()
    }

    return (
        <>
            <div className="new-message-container">
                <h1 className="title-text">New Message</h1>
                <div className="recipients-list">
                    {recipients.map((user) => (
                        <h4>{`${user.first_name} ${user.last_name}`}</h4>
                    ))}
                </div>
                <div className="all-users-list">
                    {users.map((user) => (
                        <div
                            className="user-in-list"
                            onClick={() => {
                                setRecipients([...recipients, user])
                            }}
                        >
                            <div className='users-list-image-container'>
                                <img
                                    src={user.profile_picture}
                                    alt="profile"
                                    className="users-list-profile-pic"
                                />
                            </div>
                            <h4 className="title-text">{`${user.first_name} ${user.last_name}`}</h4>
                        </div>
                    ))}
                </div>
                <div className="create-message-button-container">
                    <button className="create-channel-button" onClick={handleSubmit}>Create Message</button>
                </div>
            </div>
        </>
    );
}

export default NewDMModal;
