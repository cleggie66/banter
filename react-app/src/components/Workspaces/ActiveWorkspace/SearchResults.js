import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useModal } from "../../../context/Modal";
import { addUserToWorkspaceThunk } from "../../../store/workspace";
import { faTruckLoading } from "@fortawesome/free-solid-svg-icons";
import { loadActiveWorkspace } from "../../../store/activeWorkspace";

const SearchResults = ({ user, workspaceId }) => {
  const sessionUser = useSelector((state) => state.session.user);
  const activeWorkspace = useSelector((state) => state.workspaces);

  // console.log('hey', activeWorkspaceState)

  // console.log('herehere',activeWorkspaceState[workspaceId].id)
  const { closeModal } = useModal();
  const dispatch = useDispatch();

  console.log("session", sessionUser);

  // console.log(currentWorkspace[0].id)
  //   console.log("hiii", user);
  // also want to check if joined workspace id matches current workspace id

  //   const handleAddUserClick = (e) => {};
  // going to need to dispatch a function that allows us to add user to join tables

  // ! Push the user object that you are adding to the work space into the joined _workspaces array
  // then save and commit. create a route that when it receives a user id it pushes the user obj in joined _workspaces array

  // todo need to add users_in_workspaces to state to keep track of it
  // nothing keeping track of the change

  console.log("hello", user);

  const userInCurrentWorkspace = user.joined_workspaces.filter(
    (e) => e.id === activeWorkspace.id
  );

  // console.log(notInWorkspace)

  const handleAddUserClick = (e) => {
    e.preventDefault();
    dispatch(addUserToWorkspaceThunk(user.id, activeWorkspace.id));
    dispatch(loadActiveWorkspace(workspaceId));
    closeModal();
  };

  return (
    <div>
      <h3>{user.username}</h3>
      {/* <img src={user.profile_picture} /> */}
      {sessionUser.id !== user.id && !userInCurrentWorkspace && (
        <button onClick={handleAddUserClick}>add user</button>
      )}
    </div>
  );
};

export default SearchResults;
