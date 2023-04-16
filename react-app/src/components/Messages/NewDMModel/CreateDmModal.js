import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useModal } from "../../../context/Modal";
import { getWorkspaceByIdThunk } from "../../../store/workspace";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import {
  addUserToChannelThunk,
  createChannelThunk,
} from "../../../store/channel";
import "./NewDMModel.css";
import { loadActiveChannel } from "../../../store/activeChannel";
import UsersInWorkspaceSearchResults from "../MessagesIndex/UserSearchResults";
import DirectMessageUsersSearchResults from "./SearchResults";

function CreateDmModal() {
  const { closeModal } = useModal();
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const activeWorkspaceId = useSelector((state) => state.activeWorkspace);
  const workspaceId = activeWorkspaceId.id;

  useEffect(() => {
    dispatch(getWorkspaceByIdThunk(workspaceId));
  }, [dispatch, workspaceId]);

  // const allWorkspaces = useSelector((state) => state.workspaces);
  // const sessionUser = useSelector((state) => state.session.user);
  // const channels = useSelector((state) => Object.values(state.channels));

  // const activeWorkspace = allWorkspaces[activeWorkspaceId.id];
  // const allUsers = activeWorkspace.users_in_workspaces;

  // const nonOwnerUsers = allUsers.filter((user) => user.id !== sessionUser.id);

  // const [recipients, setRecipients] = useState(new Set());

  // const handleSubmit = async () => {
  //   const channelInformation = {
  //     name: "name",
  //     workspace_id: activeWorkspaceId.id,
  //     is_channel: false,
  //   };

  // The message is being sent correctly we know the user who sent it and we know the channel it is at
  // so lets just display it
  // it is being displayed incorrectly

  // ! Needs some work here
  //   const existingChannels = new Set();
  //   channels.forEach((channel) => {
  //     let userIds = [];
  //     channel.users_in_channels.forEach((user) => {
  //       userIds.push(user.id);
  //     });
  //     let sortedIds = userIds.sort();
  //     existingChannels.add(sortedIds.join(""));
  //   });

  //   let proposedId = [];
  //   let recipArray = [...recipients];
  //   recipArray.forEach((user) => {
  //     proposedId.push(user.id);
  //   });
  //   proposedId.push(sessionUser.id);
  //   let sortedProposedId = proposedId.sort().join("");

  //   if (existingChannels.has(sortedProposedId)) {
  //     closeModal();
  //   } else {
  //     let newChannel = await dispatch(createChannelThunk(channelInformation));

  //     recipients.forEach(async (user) => {
  //       await dispatch(addUserToChannelThunk(user.id, newChannel.id));
  //     });

  //     dispatch(loadActiveChannel(newChannel.id));

  //     closeModal();
  //   }
  // };

  // !


  const currentworkspace = useSelector((state) => state.workspaces);
  const usersInWorkspace = currentworkspace[workspaceId].users_in_workspaces;
  const allIdsOfUsersInWorkspace = [];
  usersInWorkspace.map((e) => allIdsOfUsersInWorkspace.push(e.id));

  useEffect(async () => {
    if (username.length) {
      const results = await fetch(`/api/users/${username}`);
      const data = await results.json();
      setSearchResult(data);
    }
  }, [username]);

  const searchResultsCurrentWorkspace = searchResult.filter((e) =>
    allIdsOfUsersInWorkspace.includes(e.id)
  );


  return (
    <>
      <div className="new-message-container">
        <h1 className="title-text">Enter a username to send a DM</h1>

        <h2 className="title-text">Add people to your channel!</h2>
        <label>

        To:
        <input
          className="search-input-login"
          type="search"
          placeholder="Add a user by username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        </label>
        <FontAwesomeIcon
          id="search-icon"
          className="title-text"
          icon={faMagnifyingGlass}
        />
        <h3 className="title-text">All Users</h3>
        <div className="title-text">
          {searchResultsCurrentWorkspace.map((user) => (
            <DirectMessageUsersSearchResults key={user.id} user={user} workspaceId={workspaceId} />
          ))}
        </div>

        {/* <div className="title-text">
          {[...recipients].map((user) => (
            <h4>{`${user.first_name} ${user.last_name}`}</h4>
          ))}
        </div>
        <div className="all-users-list"> */}
        {/* {users.map((user) => (
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
          ))} */}
        {/* </div>
        <div className="create-message-button-container">
          {recipients ? (
            <button className="create-channel-button" onClick={handleCreateDmClick}>
              Create Message
            </button>
          ) : (
            <h2>No other users in this workspace!</h2>
          )}
        </div> */}
      </div>
    </>
  );
}

export default CreateDmModal;
