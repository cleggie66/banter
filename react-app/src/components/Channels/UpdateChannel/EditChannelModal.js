import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateChannelThunk } from "../../../store/channel";
import { useModal } from "../../../context/Modal";
import { refreshUser } from "../../../store/session";

function EditChannelModal({ workspaceId, channel }) {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [name, setName] = useState("");
  const [errors, setErrors] = useState({});
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const history = useHistory();
  const { closeModal } = useModal();

  const handleInputErrors = () => {
    const errorsObj = {};
    if (name.length === 0) {
      errorsObj.name = "Name is required";
    }
    setErrors(errorsObj);
  };

  useEffect(() => {
    handleInputErrors();
  }, [name]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!Object.values(errors).length) {
      const channelInformation = {
        name,
        workspace_id: Number(workspaceId),
        is_channel: true,
      };

      let newChannel = await dispatch(
        updateChannelThunk(channelInformation, channel.id)
      );
      dispatch(refreshUser(sessionUser.id));
      closeModal();
      // history.push(`/dashboard/${workspaceId}/${newChannel.id}`);
    }
    setHasSubmitted(true);
  };

  return (
    <div className="edit-channel-container">
      <h1 style={{marginBottom:'4rem'}} className="title-text">Manage channel</h1>
      <form id="channel-edit-wrapper" className="edit-submit-form"onSubmit={handleFormSubmit}>

          <input
            className="text-input-login"
            id="manage-channel-input-bar"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
  
        {hasSubmitted && errors.name && <p className="errors">{errors.name}</p>}
       
          <input
            id="edit-channel-submit-button"
            className="edit-channel-button"
            type="submit"
            value={"Save"}
            disabled={hasSubmitted && Object.values(errors).length > 0}
          />
    
      </form>
    </div>
  );
}

export default EditChannelModal;
