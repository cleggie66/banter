import React, { useState, useEffect } from "react";
import DeleteUserModal from "./DeleteUser";
import OpenModalButton from "../OpenModalButton";
import UpdateUserForm from "./UpdateUser";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
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
    <div>
      <h1> Manage Your Profile </h1>

      <UpdateUserForm user={sessionUser} />
      <OpenModalButton
        className="edit-channel-button"
        buttonText="Delete My Account"
        modalComponent={<DeleteUserModal />}
      />
    </div>
  );
};

export default ProfilePage;
