import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateUserThunk } from "../../../store/session";
import { useModal } from "../../../context/Modal";
import { refreshUser } from "../../../store/session";

function EditAboutMeModal({ sessionUser }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [aboutMe, setAboutMe] = useState("");
  const [errors, setErrors] = useState({});
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const { closeModal } = useModal();

  const handleInputErrors = () => {
    const errorsObj = {};
    setErrors(errorsObj);
  };

  useEffect(() => {
    handleInputErrors();
  }, [aboutMe]);

  // --------------------------------------------------------------------

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!Object.values(errors).length) {
      const userInformation = {
        username: sessionUser.username,
        email: sessionUser.email,
        password: sessionUser.password,
        first_name: sessionUser.first_name,
        last_name: sessionUser.last_name,
        profile_picture: sessionUser.profile_picture,
        title: sessionUser.title,
        about_me: aboutMe,
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
    <div id="edit-profile-modal-wrapper" className="profile-edit-container">
      <h1  className="title-text">Edit bio</h1>
      <form className="profile-edit-container" onSubmit={handleFormSubmit}>

          <textarea
            className="text-input-about-me"
            type="text"
            value={aboutMe}
            placeholder={sessionUser.about_me}
            onChange={(e) => setAboutMe(e.target.value)}
          />
        
        {hasSubmitted && errors.aboutMe && (
          <p className="errors">{errors.aboutMe}</p>
        )}
        <p></p>
        <input
          className="profile-edit-submit-button"
          type="submit"
          value={"Save Changes"}
          disabled={hasSubmitted && Object.values(errors).length > 0}
        />
      </form>
    </div>
  );
}

export default EditAboutMeModal;
