import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateUserThunk } from "../../../store/session";
import { useModal } from "../../../context/Modal";
import { refreshUser } from "../../../store/session";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { getAllUsersThunk } from "../../../store/users";

function AddUserModal() {
  const dispatch = useDispatch();
  const history = useHistory();

  const { closeModal } = useModal();

  // want to refactor to be able to add by email later

  useEffect(() => {
    dispatch(getAllUsersThunk());
  }, [dispatch]);

  return (
    <>
      <h2>Add people to your workspace!</h2>
      <input type="search" label="Search"></input>
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        //   onClick={handleSearch}
        //   className=""
      />

      <h3>All Users</h3>
    </>
  );
}

export default AddUserModal;
