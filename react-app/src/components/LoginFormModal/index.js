import React, { useState } from "react";
import { login } from "../../store/session";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import { useHistory } from "react-router-dom";
import "./LoginForm.css";

function LoginFormModal() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState([]);
  const { closeModal } = useModal();
  const history = useHistory();


  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    } else {
        closeModal()
        history.push("/")
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setShowPassword(true);
  };

  return (
    <>
      <div className="login-form-container">
        <h1 id="login-title" className="title-text">Log In</h1>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="login-error-handling">
            <ul className="error">
              {errors.map((error, idx) => (
                <li key={idx}>{error}</li>
              ))}
            </ul>
          </div>
          <label className="login-labels">
            Email
            <div className="login-input">
              <input
                className="text-input-login"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </label>
          <label className="login-labels">
            Password
            <div className="login-input">
              <input
                className="text-input-login"
                type={showPassword ? "password" : "text"}
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>
          </label>
          <button className="login-button" type="submit">Log In</button>
        </form>
      </div>
    </>
  );
}

export default LoginFormModal;
