import React, { useState, useEffect } from "react";
import DeleteUserModal from "./DeleteUser";
import OpenModalButton from "../OpenModalButton";
import UpdateUserForm from "./UpdateUser";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const ProfilePage = () => {
  const history = useHistory();

  const sessionUser = useSelector((state) => state.session.user);

  if (!sessionUser) {
    history.push(`/home`);
  }

  return (
    <div>
      <h1>Your Profile 💁‍♀️ </h1>

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
