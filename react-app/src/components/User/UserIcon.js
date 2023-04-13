import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useModal } from "../../context/Modal";
import { useHistory, useParams } from "react-router-dom";

// !  USER NEEDS TO BE REFACTORED TO SHOW UP ON DASHBOARD LATER
// ! FOR NOW IT WILL JUST OPEN A NEW PAGE FOR SIMPLICITY
// When you click a user name it should show their profile on the right...

function UserIconModal() {
  const sessionUser = useSelector((state) => state.session.user);


  const dispatch = useDispatch();
  const { closeModal } = useModal();
  const history = useHistory();

  //   const { workspaceId } = useParams();

  // useEffect(() => {
  //   dispatch(getWorkspaceByIdThunk(workspaceId));
  // }, [dispatch, workspaceId]);

  // !
  // const handleProfileClick = (e) => {
  //   e.preventDefault();
  //   history.push(`/profile/${sessionUser.id}`);
  //   closeModal();
  // };

  return (
    <>
      {/* <button onClick={handleProfileClick}>Create</button> */}
      <div>user Image</div>
      <div>user first name // user last name</div>
      <div> user status</div>
      <button>Profile</button>
      <p></p>
      <button>Sign out of workspace.name</button>
    </>
  );
}

export default UserIconModal;
