import React from "react";
import { useSelector } from "react-redux";
import { useModal } from "../../../context/Modal";
import { addUserToWorkspaceThunk } from "../../../store/workspace";

const SearchResults = ({ user, workspaceId }) => {
  const sessionUser = useSelector((state) => state.session.user);
  const { closeModal } = useModal();

  console.log("session", sessionUser);

  // console.log(currentWorkspace[0].id)
  //   console.log("hiii", user);
  // also want to check if joined workspace id matches current workspace id

  //   const handleAddUserClick = (e) => {};
  // going to need to dispatch a function that allows us to add user to join tables

  // push user object in users_in_work
  // I want to filter for the workspaces the user isnt in
  // check the users workspaces and make sure he isnt in this current workspace
  // so i need the current workspace id

  // console.log(user.joined_workspaces)

  // ! Push the user object that you are adding to the work space into the joined _workspaces array
  // then save and commit. create a route that when it receives a user id it pushes the user obj in joined _workspaces array

  const notInWorkspace = user.joined_workspaces.filter(
    (e) => e.id !== workspaceId
  );
  // console.log(notInWorkspace)
  handleAddUserClick = async (e) => {
    e.preventDefault();

    dispatchEvent(addUserToWorkspaceThunk(user.id, workspaceId));
    closeModal();
  };

  return (
    <div>
      <h3>{user.username}</h3>
      {/* <img src={user.profile_picture} /> */}
      {sessionUser.id !== user.id && notInWorkspace && (
        <button onClick={handleAddUserClick}>add user</button>
      )}
    </div>
  );
};

export default SearchResults;
