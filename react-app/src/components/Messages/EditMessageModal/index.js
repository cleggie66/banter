import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateMessageThunk } from "../../../store/message";
import { useModal } from "../../../context/Modal";

function EditMessageModal({ message }) {
  const dispatch = useDispatch();
  const activeChannel = useSelector((state) => state.activeChannel);
  const [content, setContent] = useState(message.content);
  const [errors, setErrors] = useState({});
  // const [hasSubmitted, setHasSubmitted] = useState(false);
  const { closeModal } = useModal();

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    handleInputErrors();

    if (Object.keys(errors).length > 0) {
      return;
    }

    const payload = {
      content,
      channel_id: activeChannel.id,
    };

      dispatch(updateMessageThunk(payload));
      closeModal();
  };

  return (
    <div className="create-message-form">
      <form onSubmit={handleSubmit}>
        <input
          type="textarea"
          placeholder="Type your message here..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit">Edit Message</button>
      </form>
    </div>
  );
}

export default EditMessageModal;
