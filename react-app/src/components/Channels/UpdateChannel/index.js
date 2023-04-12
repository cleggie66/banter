// add delete channel to this form poggers

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import UpdateChannelForm from "./UpdateChannelForm";
import { getWorkspaceByIdThunk } from "../../../store/workspace";
import { getAllChannelsThunk } from "../../../store/channel";

const UpdateChannel = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const sessionUser = useSelector((state) => state.session.user);
  const { workspaceId } = useParams();

  useEffect(() => {
    dispatch(getWorkspaceByIdThunk(workspaceId));
  }, [dispatch, workspaceId]);

  if (!sessionUser) {
    history.push(`/home`);
  }

  //   useEffect(() => {
  //     dispatch(getAllChannelsThunk());
  //   }, [dispatch]);

  //   can only work space owner have access to channels???
  // that would be lame. I'm just not sure how to decide who owns the channel
  // im also tired af rn lmao
  // this should be based on user id, and workspace id
  //   const allChannels = useSelector((state) => Object.values(state.channels));
  //   const correctChannels = allChannels.filter(
  //     (e) => Number(workspaceId) === e.workspace_id
  //   );

  return (
    <div>
      {/* want to show all the owned users channels */}
      {/* have an update or delete button on each  */}
      <h1>Your Channels </h1>

      <UpdateChannelForm workspaceId={workspaceId} />
    </div>
  );
};

export default UpdateChannel;
