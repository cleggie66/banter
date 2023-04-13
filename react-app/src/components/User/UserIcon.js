import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useModal } from "../../context/Modal";
import { useHistory, useParams } from "react-router-dom";
import { getWorkspaceByIdThunk } from "../../store/workspace";
import "./UserModal.css";
// todo  USER NEEDS TO BE REFACTORED TO SHOW UP ON DASHBOARD LATER
// todo  NOW IT WILL JUST OPEN A NEW PAGE FOR SIMPLICITY
// todo  When you click a user name it should show their profile on the right...

function UserIconModal() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { closeModal } = useModal();
  // const { workspaceId } = useParams();
  const sessionUser = useSelector((state) => state.session.user);
  const currentWorkspace = useSelector((state) => state.workspaces);

  // todo potential idea to grab path name
  // todo create a split function that grabs the first /number to identify workspace
  // todo worry is that /number is just a string Number=True ????

  // useEffect(() => {
  //   dispatch(getWorkspaceByIdThunk(workspaceId));
  // }, [dispatch, workspaceId]);

  // const WorkspaceName = currentWorkspace[workspaceId].name
  // ! Nav bar how to access workspace Id? Can't use Params for some reason
  const handleStatusClick = (e) => {
    e.preventDefault();
    window.alert("Status Coming Soon!");
  };
  // grab workspaces.name

  const handleProfileClick = (e) => {
    e.preventDefault();
    history.push(`/profile/${sessionUser.id}`);
    closeModal();
  };

  const handleSignOutWorkspace = (e) => {
    e.preventDefault();
    history.push(``);
    closeModal();
  };

  // ! Cant grab workspace id from param

  return (
    <>
      <div className="user-image-container-modal">
        <img
          src={
            sessionUser.profile_picture === null
              ? sessionUser.name[0]
              : sessionUser.profile_picture
          }
          alt="User Image"
          className="profile-picture-modal"
          // this might want an active or not active class ternary to style letter for Profile pic
        />
        <div className="user-modal-name-status-container">
          <div>
            {sessionUser.first_name}
            {sessionUser.last_name}
          </div>
          <div className="status-container">
            <button className="status-button" onClick={handleStatusClick}>
              🟢{" "}
            </button>
            <div className="status">Active</div>
          </div>
        </div>
      </div>
      <button className="user-profile-button" onClick={handleProfileClick}>
        Profile
      </button>
      <button
        className="user-icon-modal-sign-out-button"
        onClick={handleSignOutWorkspace}
      >{`Sign out of Workspace`}</button>
      {/* ${WorkspaceName} */}
    </>
  );
}

export default UserIconModal;
