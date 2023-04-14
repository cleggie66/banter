import React from "react";
import DeleteUserModal from "../DeleteUser";
import OpenModalButton from "../../OpenModalButton";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPen } from "@fortawesome/free-solid-svg-icons";
import { useModal } from "../../../context/Modal";
import EditProfilePictureModal from "./ProfilePictureModal";

import "./Profile.css";
import EditUsernameModal from "./UsernameModal";
import EditNameModal from "./NameModal";
import EditPasswordModal from "./PasswordModal";
import EditEmailModal from "./EmailModal";
import EditTitleModal from "./TitleModal";
import EditAboutMeModal from "./AboutMeModal";

const ProfilePage = () => {
  const history = useHistory();
  const { setModalContent } = useModal();
  const sessionUser = useSelector((state) => state.session.user);
  //   const dispatch = useDispatch();

  if (!sessionUser) {
    history.push(`/home`);
  }

  const handleProfilePictureEdit = () => {
    setModalContent(<EditProfilePictureModal sessionUser={sessionUser} />);
  };
  const handleUserNameEdit = () => {
    setModalContent(<EditUsernameModal sessionUser={sessionUser} />);
  };
  const handleFirstNameEdit = () => {
    setModalContent(<EditNameModal sessionUser={sessionUser} />);
  };
  const handlePasswordEdit = () => {
    setModalContent(<EditPasswordModal sessionUser={sessionUser} />);
  };
  const handleEmailEdit = () => {
    setModalContent(<EditEmailModal sessionUser={sessionUser} />);
  };
  const handleTitleEdit = () => {
    setModalContent(<EditTitleModal sessionUser={sessionUser} />);
  };
  const handleAboutMeEdit = () => {
    setModalContent(<EditAboutMeModal sessionUser={sessionUser} />);
  };

  return (
    <div className="profile-page-container">
      <h1>Your Profile 💁‍♀️ </h1>
      <div className="profile-picture-container">
        <img
          src={sessionUser.profile_picture}
          alt="Profile"
          className="profile-page-picture"
        />
        <FontAwesomeIcon
          icon={faUserPen}
          onClick={handleProfilePictureEdit}
          className="edit-profile-picture"
        />
      </div>
      <div className="username-container">
        <div>{`Username:  ${sessionUser.username}`}</div>
        <FontAwesomeIcon
          icon={faUserPen}
          onClick={handleUserNameEdit}
          // className=""
        />
      </div>

      <div className="email-container">
        <div>{`Email:  ${sessionUser.email}`}</div>
        <FontAwesomeIcon
          icon={faUserPen}
          onClick={handleEmailEdit}
          // className=""
        />
      </div>

      <div className="name-container">
        <div>{`First name:  ${sessionUser.first_name}`}</div>
        <div>{`Last name:  ${sessionUser.last_name}`}</div>

        <FontAwesomeIcon
          icon={faUserPen}
          onClick={handleFirstNameEdit}
          // className=""
        />
      </div>
      <div className="password-container">
        <div>{"Change your password"}</div>
        <FontAwesomeIcon
          icon={faUserPen}
          onClick={handlePasswordEdit}
          // className=""
        />
      </div>

      <div className="title-container">
        <div>{`Title:  ${sessionUser.title}`}</div>
        <FontAwesomeIcon
          icon={faUserPen}
          onClick={handleTitleEdit}
          // className=""
        />
      </div>
      <div className="about-me-container">
        <div>{`About me:  ${sessionUser.about_me}`}</div>
        <FontAwesomeIcon
          icon={faUserPen}
          onClick={handleAboutMeEdit}
          // className=""
        />
      </div>

      {/* <UpdateUserForm sessionUser={sessionUser} /> */}
      <OpenModalButton
        buttonText="Delete My Account"
        modalComponent={<DeleteUserModal />}
        // className="delete-user-account-button"
      />
    </div>
  );
};

export default ProfilePage;
