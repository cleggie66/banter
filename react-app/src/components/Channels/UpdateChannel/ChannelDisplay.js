import React, { useState, useEffect } from "react";
import OpenModalButton from "../../OpenModalButton";
import DeleteChannelModal from "../DeleteChannel";
import UpdateChannelForm from "./UpdateChannelForm";
const ChannelDisplay = ({ channel }) => {





  return (
    <>
    <h2>{`# ${channel.name}`}</h2>

    {/* <UpdateChannelForm workspaceId={workspaceId} /> */}

    <OpenModalButton
            buttonText="delete"
            modalComponent={<DeleteChannelModal />}
          />
    
    
    </>

  );
};
export default ChannelDisplay;
