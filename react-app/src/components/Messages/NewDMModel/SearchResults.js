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
  const dispatch = useDispatch();
  const { closeModal } = useModal();
  const sessionUser = useSelector((state) => state.session.user);
  const allChannels = useSelector((state) => Object.values(state.channels));

  const allDirectMessageChannels = allChannels.filter(
    (e) => e.is_channel === false
  );

  const allDirectMessageChannelNamesArr = [];
  allDirectMessageChannels.map((e) => {
    allDirectMessageChannelNamesArr.push(e.name);
  });

  const handleAddUserClick = async (e) => {
    e.preventDefault();

    const channelInformation = {
      name: `${user.first_name} ${user.last_name}`,
      workspace_id: workspaceId,
      is_channel: false,
    };

    if (allDirectMessageChannelNamesArr.includes(channelInformation.name)) {
      const existingChannel = allDirectMessageChannels.filter(
        (e) => e.name === channelInformation.name
      );
      dispatch(loadActiveChannel(existingChannel[0].id));
      history.push(`/dashboard/${workspaceId}/${existingChannel[0].id}`);
    } else {
      // I want it to push to the channel id of the channel name that is matching
      let newChannel = await dispatch(createChannelThunk(channelInformation));
      dispatch(refreshUser(sessionUser.id));
      dispatch(addUserToChannelThunk(user.id, newChannel.id));
      dispatch(loadActiveChannel(newChannel.id));
      history.push(`/dashboard/${workspaceId}/${newChannel.id}`);
    }

    closeModal();
  };

  return (
    <>
      {" "}
      <div className="search-result-container">
        <div className="image-container">
          <img
            className="message-profile-pic"
            alt="profile"
            src={user.profile_picture}
          />
        </div>
        <h3>{user.username}</h3>
        {sessionUser.id !== user.id && (
          <button
            className="profile-edit-submit-button"
            onClick={handleAddUserClick}
          >
            message user
          </button>
        )}
      </div>
    </>
  );
};

export default DirectMessageUsersSearchResults;
