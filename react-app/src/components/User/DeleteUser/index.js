import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useModal } from "../../../context/Modal";
import { useHistory } from "react-router-dom";
import { deleteUserThunk, logout } from "../../../store/session";

function DeleteUserModal() {
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const { closeModal } = useModal();

  const handleDeleteUser = async (e) => {
    e.preventDefault();
    await dispatch(deleteUserThunk(sessionUser.id));
    closeModal();
    dispatch(logout());
    history.push(``);
  };

  const handleKeepUser = (e) => {
    e.preventDefault();
    closeModal();
  };

  return (
    <div>
      <h1 className="title-text">Confirm Delete 😟</h1>
      <h2 className="title-text">Are you sure you want to delete yourself? </h2>
      <button
        className="yes-delete-yeet"
        onClick={handleDeleteUser}
      >{`Yes 👌`}</button>

      <button className="no-delete" onClick={handleKeepUser}>{`No ❌`}</button>
    </div>
  );
}

export default DeleteUserModal;
