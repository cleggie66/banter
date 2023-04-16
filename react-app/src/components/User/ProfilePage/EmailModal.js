import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateUserThunk } from "../../../store/session";
import { useModal } from "../../../context/Modal";
import { refreshUser } from "../../../store/session";

function EditEmailModal({ sessionUser }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const { closeModal } = useModal();

  const handleInputErrors = () => {
    const errorsObj = {};
    if (email.length === 0) {
      errorsObj.email = "email is required";
    }

    setErrors(errorsObj);
  };

  useEffect(() => {
    handleInputErrors();
  }, [email]);

  // --------------------------------------------------------------------

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!Object.values(errors).length) {
      const userInformation = {
        username: sessionUser.username,
        email,
        password: sessionUser.password,
        first_name: sessionUser.first_name,
        last_name: sessionUser.last_name,
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
    <div className="profile-edit-container">
      <h1 className="title-text">Update Your Email</h1>
      <form className="profile-edit-container" onSubmit={handleFormSubmit}>
        <div className="profile-email-label">
          <label className="title-text">
            Email:{" "}
            <input
              className="text-input-login"
              type="text"
              value={email}
              placeholder={sessionUser.email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        {hasSubmitted && errors.email && (
          <p className="errors">{errors.email}</p>
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

export default EditEmailModal;
