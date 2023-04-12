import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";
import { useHistory } from "react-router-dom";
import OpenModalButton from "../OpenModalButton";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import DemoLogin from "./DemoLogin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import "./Navigation.css";
import UserIconModal from "../User/UserIcon";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogoutClick = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    history.push(`/`);
  };


const handleUserIconClick = (e) => {
  e.preventDefault()
  dispatch()

}

  const homepage = !window.location.pathname.includes("/dashboard");
  // const dashboard = window.location.pathname.includes("/dashboard");

  //   !homepage

  return (
    <div>
      {homepage && sessionUser && (
        <>
          <button onClick={handleLogoutClick}>SIGN OUT</button>
          <button>CREATE A NEW WORKSPACE </button>
        </>
      )}
      {homepage && !sessionUser && (
        <>
          <DemoLogin />
          <OpenModalButton
            buttonText="SIGN IN"
            modalComponent={<LoginFormModal />}
          />
          <OpenModalButton
            buttonText="TRY FOR FREE"
            modalComponent={<SignupFormModal />}
          />
        </>
      )}
      {!homepage && sessionUser && (
        <div className="dashboard-navbar-container">
        <div className="temporary-home">
          <NavLink
            exact
            to="/"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <FontAwesomeIcon icon={faHome} />
            <> </>
            SODO
          </NavLink>
        </div>
        <div>
        <OpenModalButton
            buttonText="userIcon"
            modalComponent={<UserIconModal />}
            />
          <FontAwesomeIcon icon={faUser}/>


        </div>
          {/* this is going to be a modal button */}
          {/* modal will have a profile button that will open user read on the dashboard */}
            
        
        </div>
      )}
    </div>
  );
}

export default Navigation;
