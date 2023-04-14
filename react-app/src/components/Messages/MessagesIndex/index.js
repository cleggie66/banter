import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingIcon from "../../LoadingPage/LoadingIcon";
import { useModal } from "../../../context/Modal";

import MessageCard from "./MessageCard";
import "./MessagesIndex.css";

function MessagesIndex() {
  const sessionUser = useSelector((state) => state.session.user);
  const activeChannel = useSelector((state) => state.activeChannel);
  const messages = activeChannel.channel_messages;
  const { openModal } = useModal();

  // const handleEditClick = (message) => {
  //   openModal(<EditMessageModal message={message} />);
  // };

  if (!messages) {
    return <LoadingIcon />;
  }

  // ! if param has a channel id in it stay open...
  // ! Idea... we could check if user has active channel it should stay open
// set a variable that stays on the active channel no matter what until another channel is selected. 
  return (
    <div>
       {messages.map((message) => (
            <MessageCard key={message.id} sessionUser={sessionUser} activeChannel={activeChannel} message={message} />
          ))}
      </div>
    //   {messages.map((message) => (
    //     <div key={message.id} className="message">
    //       <div className="message-content">
    //         <div className="image-container">
    //           <img
    //             src={message.message_owner.profile_picture}
    //             alt="profile"
    //             className="message-profile-pic"
    //           />
    //         </div>
    //         <div className="message-details">
    //           <h4>{message.message_owner.first_name}</h4>
    //           <p>{message.content}</p>
    //         </div>
    //       </div>
    //       {sessionUser.id === message.message_owner.id && (
    //         <div className="message-buttons">
    //           <OpenModalButton
    //             buttonText="edit"
    //             modalComponent={
    //               <EditMessageModal
    //                 message={message}
    //                 activeChannelId={activeChannel.channel_in_workspace.id}
    //               />
    //             }
    //           />
    //           {/* <button>Delete</button> */}
    //           <OpenModalButton
    //             buttonText="delete"
    //             modalComponent={
    //               <DeleteMessageModal
    //                 message={message}
    //                 activeChannelId={activeChannel.channel_in_workspace.id}
    //               />
    //             }
    //           />
    //         </div>
    //       )}
    //     </div>
    //   ))}
    // </div>
  );
}

export default MessagesIndex;
