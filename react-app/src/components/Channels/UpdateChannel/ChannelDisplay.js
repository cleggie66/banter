import React, { useState, useEffect } from "react";
import OpenModalButton from "../../OpenModalButton";
import DeleteChannelModal from "../DeleteChannel";
import EditChannelModal from "./EditChannelModal";
import { useHistory } from "react-router-dom";
const ChannelDisplay = ({ channel }) => {
    const history = useHistory()


    const handleEditChannel = (e) => {
        e.preventDefault();
        history.push(`/dashboard/${workspaceId}/updateChannel`)
      };
    //   refactor update to modal 

  return (
    <>
    <h2>{`# ${channel.name}`}</h2>

    <button onClick={handleEditChannel}>edit channel</button>
    <OpenModalButton
            buttonText="delete"
            modalComponent={<DeleteChannelModal />}
          />
    <OpenModalButton
            buttonText="edit"
            modalComponent={<EditChannelModal />}
          />
    </>

  );
};
export default ChannelDisplay;
