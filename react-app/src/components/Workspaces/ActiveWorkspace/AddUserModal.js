import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import SearchResults from "./SearchResults";

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
    <>
      <h2>Add people to your workspace!</h2>
      <input
        type="search"
        placeholder="Add a user by username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        //   onClick={handleSearch}
        //   className=""
      />
      <h3>All Users</h3>
      {searchResult.map((user) => (
        <SearchResults key={user.id} user={user} />
      ))}
    </>
  );
}

export default AddUserModal;
