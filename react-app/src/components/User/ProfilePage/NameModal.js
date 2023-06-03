import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateUserThunk } from "../../../store/session";
import { useModal } from "../../../context/Modal";
import { refreshUser } from "../../../store/session";

function EditNameModal({ sessionUser }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [errors, setErrors] = useState({});
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const { closeModal } = useModal();

  const handleInputErrors = () => {
    const errorsObj = {};
    if (firstName.length === 0) {
      errorsObj.firstName = "First name is required";
    }
    if (lastName.length === 0) {
      errorsObj.lastName = "Last name is required";
    }

    setErrors(errorsObj);
  };

  useEffect(() => {
    handleInputErrors();
  }, [firstName, lastName]);

  // --------------------------------------------------------------------

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!Object.values(errors).length) {
      const userInformation = {
        username: sessionUser.username,
        email: sessionUser.email,
        password: sessionUser.password,
        first_name: firstName,
        last_name: lastName,
        profile_picture: sessionUser.profile_picture,
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
    <div id="edit-profile-modal-wrapper" className="profile-edit-container">
      <h1  className="title-text">Update your name </h1>
      <form className="profile-edit-container" onSubmit={handleFormSubmit}>
      
    
          <input
            className="text-input-login"
            type="text"
            value={firstName}
            placeholder={sessionUser.first_name}
            onChange={(e) => setFirstName(e.target.value)}
          />

        {hasSubmitted && errors.firstName && (
          <p className="errors">{errors.firstName}</p>
        )}

          <input
            className="text-input-login"
            type="text"
            value={lastName}
            placeholder={sessionUser.last_name}
            onChange={(e) => setLastName(e.target.value)}
          />
      
        {hasSubmitted && errors.lastName && (
          <p className="errors">{errors.lastName}</p>
        )}
   
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

export default EditNameModal;
