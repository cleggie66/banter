import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../../context/Modal";
import { useHistory } from "react-router-dom";
import "./ManageWorkspaceModal.css";
import AddUserModal from "./AddUserModal";

function ManageWorkspaceModal({ workspace }) {
  const dispatch = useDispatch();
  const { setModalContent, setOnModalClose } = useModal();
  const { closeModal } = useModal();
  const history = useHistory();

  const handleSignOutWorkspace = (e) => {
    e.preventDefault();
    history.push(``);
    closeModal();
  };

  const handleAddUsers = () => {
    setModalContent(<AddUserModal />);
  };

  return (
    <div className="workspace-modal-container">
      <div className="workspace-modal-top">
        <img
          src={workspace.icon}
          alt="Workspace Image"
          className="workspace-icon-modal"
          // this might want an active or not active class ternary to style letter for Profile pic
        />
        <div className="workspace-modal-name-desc-container">
          <div className="workspace-modal-title-container">
            <h2 className="title-text">{workspace.name}</h2>
            {/* {sessionUser.last_name} */}
          </div>
          <div className="status-container">
            <button className="status-button-2">
              <p className="title-text">A single place for your team and your work</p>
            </button>
          </div>
        </div>
      </div>
      <div className="workspace-modal-button-container">
        <button
          className="title-text"
          id="workspace-modal-button"
          onClick={handleAddUsers}
        >{`Invite People to ${workspace.name} `}</button>

        <button
          className="sign-out-workspace-button"
          onClick={handleSignOutWorkspace}
        >
          {`Sign out of workspace`}
        </button>
      </div>
    </div>
  );
}

export default ManageWorkspaceModal;
