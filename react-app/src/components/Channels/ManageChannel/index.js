import React, { useState } from "react";
import { login } from "../../store/session";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import { useHistory } from "react-router-dom";
import CreateChannelModal from "../CreateChannel"
import "./LoginForm.css";

function ManageChannelModal() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const { closeModal } = useModal();
  const history = useHistory();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const data = await dispatch(login(email, password));
//     if (data) {
//       setErrors(data);
//     } else {
//       closeModal();
//     }
//   };
    

  return (
    <>
      {/* these are both going to call modals */}
      <button>Create</button>
      <h1>Manage</h1>
    </>
  );
}

export default ManageChannelModal;
