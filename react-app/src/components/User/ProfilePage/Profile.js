import React, { useState, useEffect } from "react";
import DeleteUserModal from "../DeleteUser";
import OpenModalButton from "../../OpenModalButton";
import UpdateUserForm from "../UpdateUser";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPen } from "@fortawesome/free-solid-svg-icons";
import { useModal } from "../../../context/Modal";
import EditProfilePictureModal from "./ProfilePictureModal";


import "./Profile.css";

const ProfilePage = () => {
  const history = useHistory();
  const { setModalContent, setOnModalClose } = useModal();
  const sessionUser = useSelector((state) => state.session.user);
  //   const dispatch = useDispatch();

  if (!sessionUser) {
    history.push(`/home`);
  }

  const handleProfilePictureEdit = () => {
    setModalContent(<EditProfilePictureModal />);
  };

  return (
    <div className="profile-page-container">
      <h1>Your Profile 💁‍♀️ </h1>
      <div className="profile-picture-container">
        <img
          src={sessionUser.profile_picture}
          alt="Profile Picture"
          className="profile-page-picture"
        />
        <FontAwesomeIcon
        icon={faUserPen}
        onClick={handleProfilePictureEdit}
        className="edit-profile-picture"
      />
      </div>
      <button>{sessionUser.username}</button>
      <p></p>
      <button>{sessionUser.first_name}</button>
      <button>{sessionUser.last_name}</button>
      <button></button>
      <FontAwesomeIcon
        icon={faUserPen}
        // onClick={onClick}
        // className=""
      />

      <button></button>
      <button>Change password</button>

      <UpdateUserForm sessionUser={sessionUser} />
      <OpenModalButton
        buttonText="Delete My Account"
        modalComponent={<DeleteUserModal />}
      />
    </div>
  );
};

export default ProfilePage;
