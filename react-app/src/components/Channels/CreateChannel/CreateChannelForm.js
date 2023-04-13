import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createChannelThunk } from "../../../store/channel";
import './CreateChannelForm.css'
// I want to send is Channel True and workspace_id current workspace we are in
import { refreshUser } from "../../../store/session";

// ! memory leak useEffect for name errors only needs to run when in box
// needs a clean up funciton for useEffect()

function CreateChannelForm({ workspaceId }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);

  const [name, setName] = useState("");
  const [errors, setErrors] = useState({});
  const [hasSubmitted, setHasSubmitted] = useState(false);

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

      let newChannel = await dispatch(createChannelThunk(channelInformation));
      dispatch(refreshUser(sessionUser.id));

      history.push(`/dashboard/${workspaceId}/${newChannel.id}`);
    }
    setHasSubmitted(true);
  };

  return (
    <div className="channel-form-container">
      {!sessionUser && <h1 className="signin-error">Please sign in to attempt to make a workspace</h1>}
      {sessionUser && (
        <>
        <div className="channel-create-container">
          <h1 className="title-text">Create a Channel</h1>
          <p id="banter-quote" className="title-text">Just a bit of banter!</p>
          <form className="channel-form-form" onSubmit={handleFormSubmit}>
            <label className="channel-name-label">
              Name:{" "}
              <input
                className="text-input-channel"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </label>
            <p></p>
            {hasSubmitted && errors.name && <p className="errors">{errors.name}</p>}
            <input
              className="create-channel-button"
              type="submit"
              value={"Create Channel"}
              disabled={hasSubmitted && Object.values(errors).length > 0}
            />
          </form>
          </div>
        </>
      )}
    </div>
  );  
}

export default CreateChannelForm;
