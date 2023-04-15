import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useModal } from "../../../context/Modal";
import { addUserToWorkspaceThunk } from "../../../store/workspace";
import { loadActiveWorkspace } from "../../../store/activeWorkspace";

const SearchResults = ({ user }) => {
  const { closeModal } = useModal();
  const activeWorkspace = useSelector((state) => state.activeWorkspace);
  const workspaceId = activeWorkspace.id;

  const sessionUser = useSelector((state) => state.session.user);

  const currentworkspace = useSelector((state) => state.workspaces);
  const usersInWorkspace = currentworkspace[workspaceId].users_in_workspaces


  console.log("wowza", usersInWorkspace);
  const dispatch = useDispatch();

  const userInCurrentWorkspace = usersInWorkspace.filter(
    (e) => e.id === user.id
  );
  console.log(userInCurrentWorkspace, "hola")

  const handleAddUserClick = (e) => {
    e.preventDefault();
    dispatch(addUserToWorkspaceThunk(user.id, workspaceId));
    dispatch(loadActiveWorkspace(workspaceId));
    closeModal();
  };

  return (
    <div>
      <h3>{user.username}</h3>
      {/* <img src={user.profile_picture} /> */}
      {sessionUser.id !== user.id && !userInCurrentWorkspace.length && (
        <button onClick={handleAddUserClick}>add user</button>
      )}
    </div>
  );
};

export default SearchResults;
