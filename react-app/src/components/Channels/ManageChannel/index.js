import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../../context/Modal";
import { useHistory, useParams } from "react-router-dom";
import { getWorkspaceByIdThunk } from "../../../store/workspace";
function ManageChannelModal() {
  const dispatch = useDispatch();
  const { closeModal } = useModal();
  const history = useHistory();

  const { workspaceId } = useParams();

  useEffect(() => {
    dispatch(getWorkspaceByIdThunk(workspaceId));
  }, [dispatch, workspaceId]);

  const handleAddChannel = (e) => {
    e.preventDefault();
    history.push(`/dashboard/${workspaceId}/newchannel`);
    closeModal();
  };

  return (
    <>
      {/* these are both going to call modals */}
      <button onClick={handleAddChannel}>Create</button>
      <button>Manage</button>
    </>
  );
}

export default ManageChannelModal;
