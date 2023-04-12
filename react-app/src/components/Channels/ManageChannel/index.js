import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../../context/Modal";
import { useHistory } from "react-router-dom";

function ManageChannelModal() {
  const dispatch = useDispatch();
  const { closeModal } = useModal();
  const history = useHistory();


    

  return (
    <>
      {/* these are both going to call modals */}
      <button>Create</button>
      <button>Manage</button>
    </>
  );
}

export default ManageChannelModal;
