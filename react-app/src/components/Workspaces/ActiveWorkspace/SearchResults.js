import React from "react";
import { useSelector } from "react-redux";

const SearchResults = ({ user }) => {
  const sessionUser = useSelector((state) => state.session.user);
  //   console.log(sessionUser.id);

  //   console.log("hiii", user);
  // also want to check if joined workspace id matches current workspace id

  //   const handleAddUserClick = (e) => {};
  // going to need to dispatch a function that allows us to add user to join tables

  // push user object in users_in_work
  return (
    <div>
      <h3>{user.username}</h3>
      {/* <img src={user.profile_picture} /> */}
      {sessionUser.id !== user.id && <button>add user</button>}
    </div>
  );
};

export default SearchResults;
