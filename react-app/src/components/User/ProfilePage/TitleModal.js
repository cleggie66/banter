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
    <>
      <h1>Update Your Title</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Title
          <input
            type="text"
            value={title}
            placeholder={sessionUser.title}
            // style={{ backgroundColor: "white" }}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        {hasSubmitted && errors.title && (
          <p className="errors">{errors.title}</p>
        )}

        <input
          type="submit"
          value={"Save Changes"}
          disabled={hasSubmitted && Object.values(errors).length > 0}
        />
      </form>
    </>
  );
}

export default EditTitleModal;
