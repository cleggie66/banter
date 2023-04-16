import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useModal } from "../../context/Modal";
import { useHistory } from "react-router-dom";
import "./UserModal.css";
// todo  USER NEEDS TO BE REFACTORED TO SHOW UP ON DASHBOARD LATER
// todo  NOW IT WILL JUST OPEN A NEW PAGE FOR SIMPLICITY
// todo  When you click a user name it should show their profile on the right...

function UserIconModal() {
  const history = useHistory();
  const { closeModal } = useModal();
  const sessionUser = useSelector((state) => state.session.user);
  const currentWorkspace = useSelector((state) => state.workspaces);

  const handleStatusClick = (e) => {
    e.preventDefault();
    window.alert("Status Coming Soon!");
  };

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

  return (
    <>
      <div className="user-image-container-modal">
        <div className="image-container-2">
          <img
            src={
              sessionUser.profile_picture === null
                ? sessionUser.name[0]
                : sessionUser.profile_picture
            }
            alt="User"
            className="profile-picture-modal"
            // this might want an active or not active class ternary to style letter for Profile pic
          />
        </div>
        <div className="user-modal-name-status-container">
          <div id="profile-names" className="title-text">
            {sessionUser.first_name}
            {sessionUser.last_name}
          </div>
          <div className="status-container">
            <button className="status-button" onClick={handleStatusClick}>
              🟢{" "}
            </button>
          </div>
        </div>
      </div>
      <button className="user-profile-button" onClick={handleProfileClick}>
        Profile
      </button>
      <button
        className="sign-out-workspace-button"
        onClick={handleSignOutWorkspace}
      >{`Sign out of Workspace`}</button>
    </>
  );
}

export default UserIconModal;
