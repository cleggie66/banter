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
    <>
      <h1>Update Your Password</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          password
          <input
            type="text"
            value={password}
            // style={{ backgroundColor: "white" }}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        {hasSubmitted && errors.password && (
          <p className="errors">{errors.password}</p>
        )}
        <label>
          Confirm Password
          <input
            type="text"
            value={confirmPassword}
            // style={{ backgroundColor: "white" }}
            onChange={(e) => setCofirmPassword(e.target.value)}
          />
        </label>
        {hasSubmitted && errors.confirmPassword && (
          <p className="errors">{errors.confirmPassword}</p>
        )}
        <p></p>
        <input
          type="submit"
          value={"Save Changes"}
          disabled={hasSubmitted && Object.values(errors).length > 0}
        />
      </form>
    </>
  );
}

export default EditPasswordModal;
