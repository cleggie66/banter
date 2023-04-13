import React, { useState, useEffect } from "react";
import OpenModalButton from "../../OpenModalButton";
import DeleteChannelModal from "../DeleteChannel";
import EditChannelModal from "./EditChannelModal";
import './ChannelDisplay.css'

const ChannelDisplay = ({ channel, workspaceId }) => {
  return (
    <div className="channel-display-container">
      <h2 className="title-text">{`# ${channel.name}`}</h2>

      <OpenModalButton
        buttonText="Delete"
        modalComponent={
          <DeleteChannelModal workspaceId={workspaceId} channel={channel} />
        }
      />
      <OpenModalButton
        buttonText="Edit"
        modalComponent={
          <EditChannelModal workspaceId={workspaceId} channel={channel} />
        }
      />
    </div>
  );
};
export default ChannelDisplay;
