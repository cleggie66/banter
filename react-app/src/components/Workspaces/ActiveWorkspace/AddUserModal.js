import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useModal } from "../../../context/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function AddUserModal() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [username, setUsername] = useState("");

  useEffect(()=>{
    

  },[username])



  const { closeModal } = useModal();

  // want to refactor to be able to add by email later

  return (
    <>
      <h2>Add people to your workspace!</h2>
      <input
        type="search"
        placeholder="Add a user by username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      


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
