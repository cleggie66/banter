import React, { useState, useEffect } from "react";
import OpenModalButton from "../../OpenModalButton";
import DeleteChannelModal from "../DeleteChannel";
import EditChannelModal from "./EditChannelModal";
const ChannelDisplay = ({ channel, workspaceId }) => {
  // ! NEWLY CREATED CHANNELS NOT SHOWING UP ON RENDER HERE
  return (
    <>
      <h2>{`# ${channel.name}`}</h2>

      <OpenModalButton
        buttonText="delete"
        modalComponent={<DeleteChannelModal workspaceId={workspaceId} channel={channel}/>}
      />
      <OpenModalButton
        buttonText="edit"
        modalComponent={<EditChannelModal workspaceId={workspaceId} channel={channel} />}
      />
    </>
  );
};
export default ChannelDisplay;
