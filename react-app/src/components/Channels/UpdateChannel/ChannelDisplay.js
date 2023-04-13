import React, { useState, useEffect } from "react";
import OpenModalButton from "../../OpenModalButton";
import DeleteChannelModal from "../DeleteChannel";
import EditChannelModal from "./EditChannelModal";
const ChannelDisplay = ({ channel, workspaceId }) => {
  return (
    <>
      <h2>{`# ${channel.name}`}</h2>

      <OpenModalButton
        className="delete-channel-button"
        buttonText="delete"
        modalComponent={
          <DeleteChannelModal workspaceId={workspaceId} channel={channel} />
        }
      />
      <OpenModalButton
        className="edit-channel-button"
        buttonText="edit"
        modalComponent={
          <EditChannelModal workspaceId={workspaceId} channel={channel} />
        }
      />
    </>
  );
};
export default ChannelDisplay;
