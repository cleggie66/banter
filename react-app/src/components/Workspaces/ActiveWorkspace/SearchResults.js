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
  const usersInWorkspace = currentworkspace[workspaceId].users_in_workspaces;

  const dispatch = useDispatch();

  const userInCurrentWorkspace = usersInWorkspace.filter(
    (e) => e.id === user.id
  );

  const handleAddUserClick = (e) => {
    e.preventDefault();
    dispatch(addUserToWorkspaceThunk(user.id, workspaceId));
    dispatch(loadActiveWorkspace(workspaceId));
    closeModal();
  };

  return (
    <>
      {" "}
      <div className="search-result-container">
        <div className="image-container">
          <img className="message-profile-pic" src={user.profile_picture} alt="profile"/>
        </div>
        <h3>{user.username}</h3>
        {sessionUser.id !== user.id && !userInCurrentWorkspace.length && (
          <button
            className="profile-edit-submit-button"
            onClick={handleAddUserClick}
          >
            add user
          </button>
        )}
      </div>
    </>
  );
};

export default SearchResults;
