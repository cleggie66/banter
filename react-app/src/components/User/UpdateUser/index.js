import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { refreshUser } from "../../../store/session";

//todo each entry should really be a modal calling the same thunk...

function UpdateUserForm({ sessionUser }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setCofirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [title, setTitle] = useState("");
  const [aboutMe, setAboutMe] = useState("");
  const [errors, setErrors] = useState({});
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const handleInputErrors = () => {
    const errorsObj = {};
    if (username.length === 0) {
      errorsObj.username = "username is required";
    }
    if (email.length === 0) {
      errorsObj.email = "email is required";
    }
    if (password.length === 0) {
      errorsObj.password = "password is required";
    }
    if (confirmPassword === password) {
      errorsObj.confirmPassword = "Password must match confirm password!";
    }
    if (firstName.length === 0) {
      errorsObj.firstName = "firstName is required";
    }
    if (lastName.length === 0) {
      errorsObj.lastName = "lastName is required";
    }
    if (title.length === 0) {
      errorsObj.title = "title is required";
    }

    setErrors(errorsObj);
  };

  useEffect(() => {
    handleInputErrors();
  }, [username, email, password, confirmPassword, firstName, lastName, title]);

  // --------------------------------------------------------------------

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!Object.values(errors).length) {
      const userInformation = {
        username,
        email,
        password,
        firstName,
        lastName,
        title,
        aboutMe,
      };

      // let updatedUser = await dispatch(
      //   updateUserThunk(userInformation, sessionUser.id)
      // );
      // dispatch(refreshUser(sessionUser.id));

      history.push(`/profile/${sessionUser.id}`);
    }
    setHasSubmitted(true);
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <label>
          username
          <input
            type="text"
            value={username}
            // style={{ backgroundColor: "white" }}
            placeholder={sessionUser.username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        {hasSubmitted && errors.username && (
          <p className="errors">{errors.username}</p>
        )}
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
        <label>
          Profile Picture
          <input
            type="text"
            value={profilePicture}
            placeholder="image url here"
            // style={{ backgroundColor: "white" }}
            onChange={(e) => setProfilePicture(e.target.value)}
          />
        </label>
        {hasSubmitted && errors.profilePicture && (
          <p className="errors">{errors.profilePicture}</p>
        )}
        <label>
          Title
          <url
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
        <input
          type="submit"
          value={"Save Changes"}
          disabled={hasSubmitted && Object.values(errors).length > 0}
        />
      </form>
    </>
  );
}

export default UpdateUserForm;
