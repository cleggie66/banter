import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../../context/Modal";
import { useHistory } from "react-router-dom";
import { getWorkspaceByIdThunk } from "../../../store/workspace";
function ManageChannelModal({ workspaceId }) {
  const dispatch = useDispatch();
  const { closeModal } = useModal();
  const history = useHistory();

  useEffect(() => {
    dispatch(getWorkspaceByIdThunk(workspaceId));
  }, [dispatch, workspaceId]);

  const handleAddChannel = (e) => {
    e.preventDefault();
    history.push(`/dashboard/${workspaceId}/newchannel`);
    closeModal();
  };

  const handleManageChannel = (e) => {
    e.preventDefault();
    history.push(`/dashboard/${workspaceId}/manage`);
    closeModal();
  };

  return (
    <div className="channel-modal-container">
      <div className="channel-modal-border">
        <h3 id="channel-modal-form"className="title-text">Create a channel</h3>
        <p className="title-text">Get the Banter started!</p>
        <button id ="modal-buttons"className="create-channel-button"onClick={handleAddChannel}>Create</button>
      </div>
        <h3 className="title-text">Manage your channels</h3>
        <p className="title-text">Edit your channels or delete<br/>them and get rid of the Banter!</p>
        <button id="modal-buttons" className="create-channel-button" onClick={handleManageChannel}>Manage</button>
    </div>
  );
}

export default ManageChannelModal;
