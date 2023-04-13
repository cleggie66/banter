import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { refreshUser } from "../../../store/session";

//todo each entry should really be a modal calling the same thunk...


function UpdateUserForm({ user }) {
  const dispatch = useDispatch();
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

  // ! Needs to be populated with currrent user information from
  // ! current user
  //   ! How to prefill values???? I forgot this on my airbnb lol






  
  //   const [errors, setErrors] = useState({});
    const [hasSubmitted, setHasSubmitted] = useState(false);
  //   const history = useHistory();
  //   const sessionUser = useSelector((state) => state.session.user);

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

  //   useEffect(() => {
  //     handleInputErrors();
  //   }, [name]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // if (!Object.values(errors).length) {
    //   const channelInformation = {
    //     name,
    //     workspace_id: Number(workspaceId),
    //     is_channel: true,
    //   };

    //   let newChannel = await dispatch(createChannelThunk(channelInformation));
    //   dispatch(refreshUser(sessionUser.id));

    //   // console.log("big sends", newChannel)
    //   history.push(`/dashboard/${workspaceId}/${newChannel.id}`);
    // }
    // setHasSubmitted(true);
  };
  console.log(user);
  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <label>
          username
          <input
            type="text"
            value={username}
            // style={{ backgroundColor: "white" }}
            placeholder={user.username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        {hasSubmitted && errors.username && <p className="errors">{errors.username}</p>}
        <label>
          email
          <input
            type="text"
            value={email}
            // style={{ backgroundColor: "white" }}
            placeholder={user.email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        {hasSubmitted && errors.email && <p className="errors">{errors.email}</p>}
        <label>
          password
          <input
            type="text"
            value={password}
            // style={{ backgroundColor: "white" }}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        {hasSubmitted && errors.password && <p className="errors">{errors.password}</p>}
        <label>
          Confirm Password
          <input
            type="text"
            value={confirmPassword}
            // style={{ backgroundColor: "white" }}
            onChange={(e) => setCofirmPassword(e.target.value)}
          />
        </label>
        {hasSubmitted && errors.confirmPassword && <p className="errors">{errors.confirmPassword}</p>}
        <label>
          First Name
          <input
            type="text"
            value={firstName}
            placeholder={user.first_name}
            // style={{ backgroundColor: "white" }}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        {hasSubmitted && errors.firstName && <p className="errors">{errors.firstName}</p>}
        <label>
          Last Name
          <input
            type="text"
            value={lastName}
            placeholder={user.last_name}
            // style={{ backgroundColor: "white" }}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        {hasSubmitted && errors.lastName && <p className="errors">{errors.lastName}</p>}
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
        {hasSubmitted && errors.profilePicture && <p className="errors">{errors.profilePicture}</p>}
        <label>
          Title
          <url
            type="text"
            value={title}
            placeholder={user.title}
            // style={{ backgroundColor: "white" }}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        {hasSubmitted && errors.title && <p className="errors">{errors.title}</p>}
        <label>
          About Me
          <textarea
            type="text"
            value={aboutMe}
            placeholder={user.about_me}
            // style={{ backgroundColor: "white" }}
            onChange={(e) => setAboutMe(e.target.value)}
          />
        </label>
        {hasSubmitted && errors.aboutMe && <p className="errors">{errors.aboutMe}</p>}
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
