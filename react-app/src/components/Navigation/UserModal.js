import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/session";
import OpenModalButton from "../OpenModalButton";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function UserIcon({ user }) {
  const sessionUser = useSelector(state => state.session.user)
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const ulRef = useRef();
  const history = useHistory();

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = (e) => {
      if (!ulRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const handleSignOutWorkspace = (e) => {
    e.preventDefault();
    history.push(``);
  };


  const handleProfileClick = (e) => {
    e.preventDefault();
    history.push(`/profile/${sessionUser.id}`);
  };

  console.log(sessionUser)

  const ulClassName = "profile-dropdown" + (showMenu ? "" : " hidden");
  const closeMenu = () => setShowMenu(false);

  return (
    <>
    

        <div onClick={openMenu} className="nav-image-container" id="special-nav-image-open">
          <img
            src={
              sessionUser.profile_picture === null
                ? sessionUser.name[0]
                : sessionUser.profile_picture
            }
            alt="profile"
            className="nav-profile-pic"
          />
        </div>

 
      <div className={ulClassName} ref={ulRef}>
        {sessionUser ? (
          <>
            <div className="user-menu-name-and-pic">
              <div className="dropdown-top-upper">
              <div id="nav-menu-section-image" className="nav-image-container">
                <img
                  src={
                    sessionUser.profile_picture === null
                      ? sessionUser.name[0]
                      : sessionUser.profile_picture
                  }
                  alt="profile"
                  id="nav-menu-img"
                  className="nav-profile-pic"
                />
              </div>
              <div>{`${sessionUser.first_name} ${sessionUser.last_name}`}</div> 
              </div>
              <span onClick={handleProfileClick} className="manage-profile-dropdown">Manage</span>
            </div>
            <div className="dropdown-email-div">{sessionUser.email}</div>
            <div className="dropdown-bio-wrapper">
            <div className="dropdown-user-bio">{sessionUser.about_me}</div>
            </div>
         
              <span className="dropdown-sign-out-button" onClick={handleSignOutWorkspace}>Sign out of workspace</span>
   
          </>
        ) : (
          <>
            <OpenModalButton
              className="log-in-button"
              buttonText="Log In"
              onItemClick={closeMenu}
              modalComponent={<LoginFormModal />}
            />
            <OpenModalButton
              className="sign-up-button"
              buttonText="Sign Up"
              onItemClick={closeMenu}
              modalComponent={<SignupFormModal />}
            />
          </>
        )}
      </div>
    </>
  );
}

export default UserIcon;
