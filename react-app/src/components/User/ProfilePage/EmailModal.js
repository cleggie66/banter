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
    <>
      <h1>Update Your Email</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          email
          <input
            type="text"
            value={email}
            // style={{ backgroundColor: "white" }}
            placeholder={sessionUser.email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        {hasSubmitted && errors.email && (
          <p className="errors">{errors.email}</p>
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

export default EditEmailModal;
