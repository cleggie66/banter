import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";
import { useLocation, useHistory } from "react-router-dom";
import OpenModalButton from "../OpenModalButton";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import DemoLogin from "./DemoLogin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUserTie } from "@fortawesome/free-solid-svg-icons";
import "./Navigation.css";
import UserIconModal from "../User/UserIcon";
import { useModal } from "../../context/Modal";

function Navigation({ isLoaded }) {
  const [homePage, setHomePage] = useState(true);
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const history = useHistory();

  useEffect(() => {
    if (pathname.includes("/dashboard")) {
      setHomePage(false);
    } else {
      setHomePage(true);
    }
  }, [pathname]);

  const handleLogoutClick = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    history.push(`/`);
  };

  // const handleUserIconClick = (e) => {
  //   e.preventDefault();
  //   dispatch();
  // };
  const handleCreateWorkspace = (e) => {
    e.preventDefault();
    history.push(`/create-workspace`);
  };

  // const homePage = !window.location.pathname.includes("/dashboard");
  // const dashboard = window.location.pathname.includes("/dashboard");

  //   !homePage

  const { setModalContent, setOnModalClose } = useModal();

  const onClick = () => {
    // if (onModalClose) setOnModalClose(onModalClose);
    setModalContent(<UserIconModal />);
  };

  return (
    <div>
      {homePage && sessionUser && (
        <>
          <button onClick={handleLogoutClick}>SIGN OUT</button>
          <button onClick={handleCreateWorkspace}>
            CREATE A NEW WORKSPACE{" "}
          </button>
        </>
      )}
      {homePage && !sessionUser && (
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
      {!homePage && sessionUser && (
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
            <FontAwesomeIcon
              icon={faUserTie}
              onClick={onClick}
              className="user-icon-button"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Navigation;
