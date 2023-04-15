import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import EditMessageModal from "../EditMessageModal";
import OpenModalButton from "../../OpenModalButton";
import { deleteMessageThunk } from "../../../store/message";
import { useEffect } from "react";


const MessageCard = ({ message, sessionUser, activeChannel, socket, handleDeleteMessage , messages, setMessages}) => {



  return (
    <div>
      <div key={message?.id} className="message">
        <div className="message-content">
          <div className="image-container">
            <img
              src={message?.message_owner?.profile_picture || message?.profile_picture}
              alt="profile"
              className="message-profile-pic"
            />
          </div>
          <div className="message-details">
            <h4>{message?.message_owner?.first_name || message.first_name}</h4>
            <p>{message?.content}</p>
          </div>
        </div>
        {(sessionUser?.id === message?.message_owner?.id || sessionUser?.id === message.user_id) && (
          <div className="message-buttons">
            <OpenModalButton
              buttonText="edit"
              modalComponent={
                <EditMessageModal
                  message={message}
                  activeChannelId={activeChannel?.id}
                />
              }
            />
            <button onClick={(e) => handleDeleteMessage(e, message)}>delete test</button>
          </div>
        )}
      </div>
    </div>
  );
};
export default MessageCard;
