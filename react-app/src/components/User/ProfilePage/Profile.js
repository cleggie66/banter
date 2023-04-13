import React, { useState, useEffect } from "react";
import DeleteUserModal from "../DeleteUser";
import OpenModalButton from "../../OpenModalButton";
import UpdateUserForm from "../UpdateUser";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "./Profile.css"
// import { getWorkspaceByIdThunk } from "../../../store/workspace";
// import ChannelDisplay from "./ChannelDisplay";
const ProfilePage = () => {
  const history = useHistory();
//   const dispatch = useDispatch();

  const sessionUser = useSelector((state) => state.session.user);

//   const correctChannels = sessionUser.joined_channels.filter(
//     (e) => e.is_channel === true
//   );

  if (!sessionUser) {
    history.push(`/home`);
  }

//   const { workspaceId } = useParams();

//   useEffect(() => {
//     dispatch(getWorkspaceByIdThunk(workspaceId));
//   }, [dispatch, workspaceId]);

  return (
    <div className="profile-page-container">
      <h1>Your Profile 💁‍♀️ </h1>
      <img src={sessionUser.profile_picture} alt="Profile Picture" className="profile-page-picture" />
      <button>{sessionUser.username}</button>
      <p></p>
      <button>{sessionUser.first_name}</button>
      <button>{sessionUser.last_name}</button>
      <button></button>


      <button></button>
      <button>Change password</button>

      <UpdateUserForm sessionUser={sessionUser}/>
      <OpenModalButton
            buttonText="Delete My Account"
            modalComponent={<DeleteUserModal />}
          />
    </div>
  );
};

export default ProfilePage;
