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
    <>
      <h1>Tell others about yourself!</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          About Me
          <textarea
            type="text"
            value={aboutMe}
            placeholder={sessionUser.about_me}
            // style={{ backgroundColor: "white" }}
            onChange={(e) => setAboutMe(e.target.value)}
          />
        </label>
        {hasSubmitted && errors.aboutMe && (
          <p className="errors">{errors.aboutMe}</p>
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

export default EditAboutMeModal;
