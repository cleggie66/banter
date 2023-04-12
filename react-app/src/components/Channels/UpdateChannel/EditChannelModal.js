import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateChannelThunk } from "../../../store/channel";
import { useModal } from "../../../context/Modal";
import { refreshUser } from "../../../store/session";
// I want to send is Channel True and workspace_id current workspace we are in

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
      dispatch(refreshUser(sessionUser.id))
      closeModal();
      history.push(`/dashboard/${workspaceId}/${newChannel.id}`);
    }
    setHasSubmitted(true);
  };

  return (
    <>
      <h1>Manage Your Channel</h1>
      <h3>so, weary traveler... Looking to edit this channel eh??🧙🧙🧙</h3>
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
          value={"Update Channel"}
          disabled={hasSubmitted && Object.values(errors).length > 0}
        />
      </form>
    </>
  );
}

export default EditChannelModal;
