import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";
import { useHistory } from "react-router-dom";
import OpenModalButton from "../OpenModalButton";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import DemoLogin from "./DemoLogin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import "./Navigation.css";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogoutClick = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    history.push(`/`);
  };
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
        <div className="temporary-home">
          <NavLink
            exact
            to="/home"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <FontAwesomeIcon icon={faHome} />
            <> </>
            SODO
          </NavLink>
        </div>
      )}
    </div>
  );
}

export default Navigation;
