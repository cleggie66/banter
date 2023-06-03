import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import UsersInWorkspaceSearchResults from "./UserSearchResults";

function AddUserToChannelModal() {
  const [username, setUsername] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const activeWorkspace = useSelector((state) => state.activeWorkspace);
  const workspaceId = activeWorkspace.id;

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
    <div className="workspace-add-user-modal-wrapper">
      <h2 className="title-text">Add people to your channel!</h2>
      <div>
      <input
        className="search-input-login"
        type="search"
        placeholder="Add a user by username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <FontAwesomeIcon
        id="search-icon"
        className="title-text"
        icon={faMagnifyingGlass}
      />
      </div>
      {/* <h3 className="title-text">All Users</h3> */}
      <div className="title-text">
        {searchResultsCurrentWorkspace.map((user) => (
          <UsersInWorkspaceSearchResults key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default AddUserToChannelModal;
