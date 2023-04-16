import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useModal } from "../../../context/Modal";
import {
  addUserToChannelThunk,
  createChannelThunk,
} from "../../../store/channel";
import { loadActiveChannel } from "../../../store/activeChannel";
import { refreshUser } from "../../../store/session";
import { useHistory } from "react-router-dom";

const DirectMessageUsersSearchResults = ({ user, workspaceId }) => {
  const history = useHistory();
  const { closeModal } = useModal();
  const activeChannel = useSelector((state) => state.activeChannel);
  const channelId = activeChannel.id;
  const sessionUser = useSelector((state) => state.session.user);

  // there is no channel id yet... we need to get it from the thunk
  // we can simply check if channel name exists and can redirect .

  const currentChannel = useSelector((state) => state.channels);

  const dispatch = useDispatch();

  // This needs to create a new channel with boolean false and

  const handleAddUserClick = async (e) => {
    e.preventDefault();

    // have to create a channel and send the new id first!
    // name is going to be `sessionUser.name, selected users names`
    const channelInformation = {
      name: `${sessionUser.username}`,
      workspace_id: Number(workspaceId),
      is_channel: true,
    };

    let newChannel = await dispatch(createChannelThunk(channelInformation));
    dispatch(refreshUser(sessionUser.id));
    dispatch(addUserToChannelThunk(user.id, newChannel.id));
    dispatch(loadActiveChannel(newChannel.id));
    history.push(`/dashboard/${workspaceId}/${newChannel.id}`);
    closeModal();
  };

  return (
    <>
      {" "}
      <div className="search-result-container">
        <div className="image-container">
          <img className="message-profile-pic" src={user.profile_picture} />
        </div>
        <h3>{user.username}</h3>
        {sessionUser.id !== user.id && (
          <button
            className="profile-edit-submit-button"
            onClick={handleAddUserClick}
          >
            add user
          </button>
        )}
      </div>
    </>
  );
};

export default DirectMessageUsersSearchResults;
