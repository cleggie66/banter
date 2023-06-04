import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useModal } from "../../../context/Modal";
import { deleteChannelThunk } from "../../../store/channel";
import { useHistory } from "react-router-dom";
import { refreshUser } from "../../../store/session";
import './DeleteChannel.css'

function DeleteChannelModal({ workspaceId, channel }) {
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const { closeModal } = useModal();

  const handleDeleteChannel = async (e) => {
    e.preventDefault();
    await dispatch(deleteChannelThunk(channel.id));
    dispatch(refreshUser(sessionUser.id));
    closeModal();
    // history.push(`/dashboard/${workspaceId}/${channel.id}`);
  };

  const handleKeepChannel = (e) => {
    e.preventDefault();
    closeModal();
  };

  return (
    <div className="confirm-delete-wrapper-button">
      <h2 style={{marginBottom:'4rem'}} className="title-text">Delete channel?</h2>

<div className="delete-channel-wrapper-div">
      <button
        className="yes-delete-yeet"
        onClick={handleDeleteChannel}
      >{`Confirm`}</button>

      <button
        className="no-delete"
        onClick={handleKeepChannel}
      >{`Cancel`}</button>
    </div>
    </div>
  );
}

export default DeleteChannelModal;
