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
      
  );
}

export default MessagesIndex;
