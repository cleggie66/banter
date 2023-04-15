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
    <>    <div className="search-result-container">
      <div className="image-container">
      <img className="message-profile-pic" src={user.profile_picture} />
      </div>
      <h3>{user.username}</h3>
    </div>
      {sessionUser.id !== user.id && <button className="profile-edit-submit-button">Add User</button>}
    </>  
  );
};

export default SearchResults;
