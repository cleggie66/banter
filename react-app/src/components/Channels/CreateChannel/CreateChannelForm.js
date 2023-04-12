import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createChannelThunk } from "../../../store/channel";
// I want to send is Channel True and workspace_id current workspace we are in

function CreateChannelForm({ workspaceId }) {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [errors, setErrors] = useState({});
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const history = useHistory();

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
        workspace_id: Number(workspaceId),
        name,
        is_channel: true,
      };

      let newChannel = await dispatch(createChannelThunk(channelInformation));

      history.push(`/dashboard/${workspaceId}/${newChannel.id}`);
    }
    setHasSubmitted(true);
  };

  return (
    <>
      <h1>Create a Channel</h1>
      <h3>Just a bit of banter!</h3>
      <form onSubmit={handleFormSubmit}>
        <label>
          Name
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <p></p>
        {hasSubmitted && errors.name && <p className="errors">{errors.name}</p>}
        <input
          type="submit"
          value={"Create Spot"}
          disabled={hasSubmitted && Object.values(errors).length > 0}
        />
      </form>
    </>
  );
}

export default CreateChannelForm;
