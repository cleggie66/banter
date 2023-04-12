// add delete channel to this form poggers

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getWorkspaceByIdThunk } from "../../../store/workspace";
import ChannelDisplay from "./ChannelDisplay";
const UpdateChannel = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const sessionUser = useSelector((state) => state.session.user);
  console.log('hello', sessionUser.joined_channels);

  // const correctChannels = sessionUser.joined_channels
  const correctChannels = sessionUser.joined_channels.filter(
    (e) =>  e.is_channel === true
  );

  if (!sessionUser) {
    history.push(`/home`);
  }

  const { workspaceId } = useParams();

  useEffect(() => {
    dispatch(getWorkspaceByIdThunk(workspaceId));
  }, [dispatch, workspaceId]);

  return (
    <div>
      {/* want to show all the owned users channels */}
      {/* have an update or delete button on each  */}
      {/* these also should only be is_channel=true  */}
      <h1>Your Channels </h1>
      {correctChannels.map((channel) => (
        <ChannelDisplay
          key={channel.id}
          channel={channel}
          workspaceId={workspaceId}
        />
      ))}
    </div>
  );
};

export default UpdateChannel;
