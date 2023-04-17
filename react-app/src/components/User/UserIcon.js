import React from "react";
import { useSelector } from "react-redux";
import { useModal } from "../../context/Modal";
import { useHistory } from "react-router-dom";
import "./UserModal.css";

function UserIconModal() {
  const history = useHistory();
  const { closeModal } = useModal();
  const sessionUser = useSelector((state) => state.session.user);

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
      <button className="sign-out-workspace-button" onClick={handleProfileClick}>
        Manage My Profile
      </button>
      <button
        className="sign-out-workspace-button"
        onClick={handleSignOutWorkspace}
      >{`Sign out of Workspace`}</button>
    </>
  );
}

export default UserIconModal;
