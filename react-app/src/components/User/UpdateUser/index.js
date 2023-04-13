import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { refreshUser } from "../../../store/session";

// ! memory leak useEffect for name errors only needs to run when in box
// needs a clean up funciton for useEffect()

function UpdateUserForm() {
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
  //   const [errors, setErrors] = useState({});
  //   const [hasSubmitted, setHasSubmitted] = useState(false);
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

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <label>
          username
          {/* <input
            type="text"
            value={username}
            onChange={(e) => setName(e.target.value)}
            required
          /> */}
        </label>
        <p></p>
        {/* {hasSubmitted && errors.name && <p className="errors">{errors.name}</p>}
        <input
          type="submit"
          value={"Create Channel"}
          disabled={hasSubmitted && Object.values(errors).length > 0}
        /> */}
      </form>
    </>
  );
}

export default UpdateUserForm;
