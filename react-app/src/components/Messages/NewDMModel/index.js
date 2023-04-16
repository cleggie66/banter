import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useModal } from "../../../context/Modal";
import { getWorkspaceByIdThunk } from "../../../store/workspace";
import {
  addUserToChannelThunk,
  createChannelThunk,
} from "../../../store/channel";
import "./NewDMModel.css";
import { loadActiveChannel } from "../../../store/activeChannel";

function NewDMModal({ workspaceId }) {

  const dispatch = useDispatch();

  const [recipients, setRecipients] = useState(new Set());

  useEffect(() => {
    dispatch(getWorkspaceByIdThunk(workspaceId));
  }, [dispatch, workspaceId]);

  const activeWorkspaceState = useSelector((state) => state.workspaces);
  const sessionUser = useSelector((state) => state.session.user);
  const channels = useSelector((state) => Object.values(state.channels));

  const activeWorkspace = activeWorkspaceState[workspaceId];
  const allUsers = activeWorkspace.users_in_workspaces;
  const users = allUsers.filter((user) => user.id !== sessionUser.id);

  const { closeModal } = useModal();

  const handleSubmit = async () => {
    const channelInformation = {
      name: "name",
      workspace_id: Number(workspaceId),
      is_channel: false,
    };

    // checks if channel already exists — might need ot be refactored
    const existingChannels = new Set();
    channels.forEach((channel) => {
      let userIds = [];
      channel.users_in_channels.forEach((user) => {
        userIds.push(user.id);
      });
      let sortedIds = userIds.sort();
      existingChannels.add(sortedIds.join(""));
    });

    let proposedId = [];
    let recipArray = [...recipients];
    recipArray.forEach((user) => {
      proposedId.push(user.id);
    });
    proposedId.push(sessionUser.id);
    let sortedProposedId = proposedId.sort().join("");

    if (existingChannels.has(sortedProposedId)) {
      closeModal();
    } else {
      let newChannel = await dispatch(createChannelThunk(channelInformation));

      recipients.forEach(async (user) => {
        await dispatch(addUserToChannelThunk(user.id, newChannel.id));
      });

      dispatch(loadActiveChannel(newChannel.id));

      closeModal();
    }
  };

  return (
    <>
      <div className="new-message-container">
        <h1 className="title-text">New Message</h1>
        <div className="title-text">
          {[...recipients].map((user) => (
            <h4>{`${user.first_name} ${user.last_name}`}</h4>
          ))}
        </div>
        <div className="all-users-list">
          {users.map((user) => (
            <div
              className="user-in-list"
              onClick={() => {
                setRecipients(new Set([...recipients, user]));
              }}
            >
              <div className="users-list-image-container">
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
          {recipients ? (
            <button className="create-channel-button" onClick={handleSubmit}>
              Create Message
            </button>
          ) : (
            <h2>No other users in this workspace!</h2>
          )}
        </div>
      </div>
    </>
  );
}

export default NewDMModal;
