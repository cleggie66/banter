import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateUserThunk } from "../../../store/session";
import { useModal } from "../../../context/Modal";
import { refreshUser } from "../../../store/session";

function EditTitleModal({ sessionUser }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [errors, setErrors] = useState({});
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const { closeModal } = useModal();

  const handleInputErrors = () => {
    const errorsObj = {};
    if (title.length === 0) {
      errorsObj.title = "title is required";
    }

    setErrors(errorsObj);
  };

  useEffect(() => {
    handleInputErrors();
  }, [title]);

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
        title,
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
      <h1 className="title-text">Update Your Title</h1>
      <form className="profile-edit-container" onSubmit={handleFormSubmit}>
        <label className="title-text">
          Title:{" "}
          <input
            className="text-input-login"
            type="text"
            value={title}
            placeholder={sessionUser.title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        {hasSubmitted && errors.title && (
          <p className="errors">{errors.title}</p>
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

export default EditTitleModal;
