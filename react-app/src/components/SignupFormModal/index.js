import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import { signUp } from "../../store/session";
import "./SignupForm.css";

function SignupFormModal() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [aboutMe, setAboutMe] = useState("");
  const [title, setTitle] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const { closeModal } = useModal();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      const data = await dispatch(
        signUp(
          username,
          email,
          password,
          firstName,
          lastName,
          profilePicture,
          title,
          aboutMe
        )
      );
      if (data) {
        setErrors(data);
      } else {
        closeModal();
      }
    } else {
      setErrors([
        "Confirm Password field must be the same as the Password field",
      ]);
    }
  };

  return (
    <div className="new-signup-form-container">
      <h1 style={{marginBottom:'0', textAlign:'center'}} className="title-text">Sign up for Banter</h1>
      <form className="signup-edit-inner-form" onSubmit={handleSubmit}>
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
        <label className="login-labels">
          <input
            className="text-input-login"
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </label>
        <label className="login-labels">
          <input
            className="text-input-login"
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </label>
        <label className="login-labels">
          <input
            className="text-input-login"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label className="login-labels">
          <input
            className="text-input-login"
            type="text"
            value={username}
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <label className="login-labels">
          <input
            className="text-input-login"
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <label className="login-labels">
          <input
            className="text-input-login"
            placeholder="Confirm Password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </label>
        <label className="login-labels">
          <input
            className="text-input-login"
            type="text"
            placeholder="Title (optional)"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label className="login-labels">
          <input
            className="text-input-login"
            type="text"
            placeholder="Profile Picture (optional)"
            value={profilePicture}
            onChange={(e) => setProfilePicture(e.target.value)}
          />
        </label>
        <label className="login-labels">
          <input
            className="text-input-login"
            type="text"
            value={aboutMe}
            placeholder="About Me (optional)"
            onChange={(e) => setAboutMe(e.target.value)}
          />
        </label>
        <button id="sign-in-button" style={{width:'100%', borderRadius:'5px', marginTop:'20px'}} className="profile-edit-submit-button" type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignupFormModal;
