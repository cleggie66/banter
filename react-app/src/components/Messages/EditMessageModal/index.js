import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateMessageThunk } from "../../../store/message";
import { useModal } from "../../../context/Modal";
import { loadActiveChannel } from "../../../store/activeChannel";
import { getAllChannelMessagesThunk } from "../../../store/message";

function EditMessageModal({ message, activeChannelId, socket }) {

  const dispatch = useDispatch();
  const state = useSelector((state) => state)
  const [content, setContent] = useState(message.content);
  const [errors, setErrors] = useState({});
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const { closeModal } = useModal();

  console.log(state)
  const handleInputErrors = () => {
    const errorsObj = {};
    if (content.length === 0) {
      errorsObj.content = "Text is required";
    }
    setErrors(errorsObj);
  };

  useEffect(() => {
    handleInputErrors();
  }, [content]);


  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!Object.values(errors).length) {
      const messageInformation = {
        content,
      };
      if (socket) {
        let res = await dispatch(updateMessageThunk(messageInformation, message.id));
        if (res) {
          socket.emit('edit', {
            channel_id: res.channel_id,
            content: res.content,
            id: res.id,
            message_owner: res.message_owner,
            user_id: res.user_id
          })
        }


      await dispatch(loadActiveChannel(activeChannelId))
      closeModal();
      }
    }
    setHasSubmitted(true);
  };

  return (
    <>
      <h1>Edit Your Message</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Text
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </label>
        <p></p>
        {hasSubmitted && errors.content && (
          <p className="errors">{errors.text}</p>
        )}
        <input
          type="submit"
          value={"Update Message"}
          disabled={hasSubmitted && Object.values(errors).length > 0}
        />
      </form>
    </>
  );
}

export default EditMessageModal;
