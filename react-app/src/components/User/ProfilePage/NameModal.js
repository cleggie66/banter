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
      errorsObj.firstName = "firstName is required";
    }
    if (lastName.length === 0) {
      errorsObj.lastName = "lastName is required";
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
    <>
      <h1>Update Your First and Last Name </h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          First Name
          <input
            type="text"
            value={firstName}
            placeholder={sessionUser.first_name}
            // style={{ backgroundColor: "white" }}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        {hasSubmitted && errors.firstName && (
          <p className="errors">{errors.firstName}</p>
        )}
        <label>
          Last Name
          <input
            type="text"
            value={lastName}
            placeholder={sessionUser.last_name}
            // style={{ backgroundColor: "white" }}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        {hasSubmitted && errors.lastName && (
          <p className="errors">{errors.lastName}</p>
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

export default EditNameModal;
