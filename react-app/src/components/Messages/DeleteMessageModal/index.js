import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteMessageThunk } from "../../../store/message";
import { useModal } from "../../../context/Modal";
import { refreshUser } from "../../../store/session";
import { refreshActiveChannelMessages } from "../../../store/activeChannel";
function DeleteMessageModal({ message, activeChannelId }) {
// const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const { closeModal } = useModal();

  const handleDeleteMessage = async (e) => {
    e.preventDefault();

    await dispatch(deleteMessageThunk(message.id));
    dispatch(refreshUser(sessionUser.id));
    dispatch(refreshActiveChannelMessages(activeChannelId))    
    closeModal();
  };

  const handleKeepMessage = (e) => {
    e.preventDefault();
    closeModal();
  };


  return (
    <div>
      <h1>Confirm Delete 😟</h1>
      <h2>Are you sure you want to delete this message? </h2>
      <button
        className="yes-delete-yeet"
        onClick={handleDeleteMessage}
      >{`Yes 👌`}</button>

      <button
        className="no-delete"
        onClick={handleKeepMessage}
      >{`No ❌`}</button>
    </div>
  );
}

export default DeleteMessageModal;
