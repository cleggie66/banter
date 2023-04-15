import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useModal } from "../../../context/Modal";
import { addUserToChannelThunk } from "../../../store/channel";
import { loadActiveChannel } from "../../../store/activeChannel";

const UsersInWorkspaceSearchResults = ({ user }) => {
  const { closeModal } = useModal();
  const activeChannel = useSelector((state) => state.activeChannel);
  const channelId = activeChannel.id;
  const sessionUser = useSelector((state) => state.session.user);
  const currentChannel = useSelector((state) => state.channels);
  const usersInChannel = currentChannel[channelId].users_in_channels;

  const dispatch = useDispatch();

  const userInCurrentChannel = usersInChannel.filter((e) => e.id === user.id);

  const handleAddUserClick = (e) => {
    e.preventDefault();
    dispatch(addUserToChannelThunk(user.id, channelId));
    dispatch(loadActiveChannel(channelId));
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
        {sessionUser.id !== user.id && !userInCurrentChannel.length && (
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

export default UsersInWorkspaceSearchResults;
