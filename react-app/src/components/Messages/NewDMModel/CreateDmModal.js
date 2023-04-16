import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWorkspaceByIdThunk } from "../../../store/workspace";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./NewDMModel.css";
import DirectMessageUsersSearchResults from "./SearchResults";

function CreateDmModal() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const activeWorkspaceId = useSelector((state) => state.activeWorkspace);
  const workspaceId = activeWorkspaceId.id;

  useEffect(() => {
    dispatch(getWorkspaceByIdThunk(workspaceId));
  }, [dispatch, workspaceId]);

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
            <DirectMessageUsersSearchResults
              key={user.id}
              user={user}
              workspaceId={workspaceId}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default CreateDmModal;
