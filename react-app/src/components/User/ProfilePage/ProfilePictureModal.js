import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateUserThunk } from "../../../store/session";
import { useModal } from "../../../context/Modal";
import { refreshUser } from "../../../store/session";

function EditProfilePictureModal({ sessionUser }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [profilePicture, setProfilePicture] = useState("");
  const [errors, setErrors] = useState({});
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const { closeModal } = useModal();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!Object.values(errors).length) {
      const userInformation = {
        username: sessionUser.username,
        email: sessionUser.email,
        password: sessionUser.password,
        first_name: sessionUser.first_name,
        last_name: sessionUser.last_name,
        profile_picture: profilePicture,
        title: sessionUser.title,
        about_me: sessionUser.about_me,
      };

      let updatedUser = await dispatch(
        updateUserThunk(userInformation, sessionUser.id)
      );
      dispatch(refreshUser(sessionUser.id));
      closeModal();
      history.push(`/profile/${updatedUser.id}`);
    }
    setHasSubmitted(true);
  };

  return (
    <>
      <h1 className="title-text">Update Your Profile Picture</h1>
      <form className="profile-edit-container" onSubmit={handleFormSubmit}>
        <div className="profile-picture-label">
          <label className="title-text">
            Profile Picture:{" "}
            <input
              className="text-input-login"
              type="text"
              value={profilePicture}
              placeholder="image url here"
              onChange={(e) => setProfilePicture(e.target.value)}
            />
          </label>
        </div>
        <p></p>
        <input
          className="profile-edit-submit-button"
          type="submit"
          value={"Save Changes"}
          disabled={hasSubmitted && Object.values(errors).length > 0}
        />
      </form>
    </>
  );
}

export default EditProfilePictureModal;
