import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import SearchResults from "./SearchResults";
import './AddUser.css'

function AddUserModal() {
  const [username, setUsername] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  useEffect(async () => {
    if (username.length) {
      const results = await fetch(`/api/users/${username}`);
      const data = await results.json();
      setSearchResult(data);
    }
  }, [username]);
  
  // want to refactor to be able to add by email later

  return (
    <div className="workspace-add-user-modal-wrapper">
      <div className="add-user-header-and-bar">
      <h2 className="title-text">Add people to your workspace!</h2>
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
      </div>
      {/* <h3 className="title-text">All Users</h3> */}
      <div className="title-text">
        {searchResult.map((user) => (
          <SearchResults key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default AddUserModal;
