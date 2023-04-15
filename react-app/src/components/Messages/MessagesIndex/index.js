import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingIcon from "../../LoadingPage/LoadingIcon";
import MessageCard from "./MessageCard";
import "./MessagesIndex.css";
import MessageForm from "../MessageForm";
import { useParams } from "react-router-dom";
import { getAllChannelMessagesThunk } from "../../../store/message";

function MessagesIndex({newMessages}) {
  const sessionUser = useSelector((state) => state.session.user);
  const activeChannel = useSelector((state) => state.activeChannel);
  const messages = useSelector((state) => Object.values(state.messages));
  const dispatch = useDispatch()


  const allCurrentChannelMessages = messages.filter(
    (e) => activeChannel.id === e.channel_id
  );

  console.log(allCurrentChannelMessages)


  if (!allCurrentChannelMessages) {
    return <LoadingIcon />;
  }


    let arr;
    if (allCurrentChannelMessages && newMessages) {
        arr = [...allCurrentChannelMessages, ...newMessages]
    }

    console.log(newMessages)

    let uniqueIds = {};

    let noDupes;
    if (arr) {
        noDupes = arr.filter(message => {
            if (!uniqueIds[message.id]) {
                uniqueIds[message.id] = true
                return true
            }
            return false
        })
    }

    let sortedMessages = noDupes?.sort((a, b) => a.id - b.id)

    console.log(sortedMessages)


  return (
    <div>
      {allCurrentChannelMessages?.map((message) => (
        <MessageCard
          key={message.id}
          sessionUser={sessionUser}
          activeChannel={activeChannel}
          message={message}
        />
      ))}
      {activeChannel.id && <MessageForm activeChannel={activeChannel} />}
    </div>
  );
}

export default MessagesIndex;
