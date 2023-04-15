import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateUserThunk } from "../../../store/session";
import { useModal } from "../../../context/Modal";
import { refreshUser } from "../../../store/session";

function EditPasswordModal({ sessionUser }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [password, setPassword] = useState("");
  const [confirmPassword, setCofirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const { closeModal } = useModal();

  const handleInputErrors = () => {
    const errorsObj = {};
    if (password.length === 0) {
      errorsObj.password = "password is required";
    }
    if (password !== confirmPassword) {
      errorsObj.confirmPassword = "Password must match confirm password!";
    }

    setErrors(errorsObj);
  };

  useEffect(() => {
    handleInputErrors();
  }, [password, confirmPassword]);

  // --------------------------------------------------------------------

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!Object.values(errors).length) {
      const userInformation = {
        username: sessionUser.username,
        email: sessionUser.email,
        password,
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
      <h1 className="title-text">Update Your Password</h1>
      <form className="profile-edit-container" onSubmit={handleFormSubmit}>
        <label id="password" className="title-text">
          Password:{" "}
          <input
            className="text-input-login"
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        {hasSubmitted && errors.password && (
          <p className="errors">{errors.password}</p>
        )}
        <label className="title-text">
          Confirm Password:{" "}
          <input
            className="text-input-login"
            type="text"
            value={confirmPassword}
            onChange={(e) => setCofirmPassword(e.target.value)}
          />
        </label>
        {hasSubmitted && errors.confirmPassword && (
          <p className="errors">{errors.confirmPassword}</p>
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

export default EditPasswordModal;
