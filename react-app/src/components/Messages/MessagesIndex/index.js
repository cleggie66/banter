import React from "react";
import { useSelector } from "react-redux";
import LoadingIcon from "../../LoadingPage/LoadingIcon";

import MessageCard from "./MessageCard";
import "./MessagesIndex.css";
import MessageForm from "../MessageForm";
import { useParams } from "react-router-dom";

function MessagesIndex() {
  const params= useParams()
  console.log(params)


  
  const sessionUser = useSelector((state) => state.session.user);
  const activeChannel = useSelector((state) => state.activeChannel);
  const messages = activeChannel.channel_messages;

// instead of active channel pass the current channel from the redux store
// instead of active channel we want the channel clicked on
// 


  if (!messages) {
    return <LoadingIcon />;
  }

  // ! if param has a channel id in it stay open...
  // ! Idea... we could check if user has active channel it should stay open
  // set a variable that stays on the active channel no matter what until another channel is selected.
  return (
    <div>
      {messages.map((message) => (
        <MessageCard
          key={message.id}
          sessionUser={sessionUser}
          activeChannel={activeChannel}
          message={message}
        />
      ))}
      <MessageForm activeChannel={activeChannel} />
    </div>
  );
}

export default MessagesIndex;
