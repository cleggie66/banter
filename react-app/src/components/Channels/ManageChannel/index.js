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
    <>
      <button onClick={handleAddChannel}>Create</button>
      <p></p>
      <button onClick={handleManageChannel}>Manage</button>
    </>
  );
}

export default ManageChannelModal;
