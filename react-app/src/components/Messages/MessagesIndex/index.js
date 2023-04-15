import React from "react";
import { useSelector } from "react-redux";
import LoadingIcon from "../../LoadingPage/LoadingIcon";
import { useModal } from "../../../context/Modal";
import MessageCard from "./MessageCard";
import MessageForm from "../MessageForm";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsersRectangle } from "@fortawesome/free-solid-svg-icons";
import "./MessagesIndex.css";
import AddUserToChannelModal from "./AddUserModal";

function MessagesIndex() {
  const { setModalContent } = useModal();

  const sessionUser = useSelector((state) => state.session.user);
  const activeChannel = useSelector((state) => state.activeChannel);

  const messages = useSelector((state) => Object.values(state.messages));

  const allCurrentChannelMessages = messages.filter(
    (e) => activeChannel.id === e.channel_id
  );

  if (!allCurrentChannelMessages) {
    return <LoadingIcon />;
  }

  const handleAddUserToChannel = () => {
    setModalContent(<AddUserToChannelModal />);
  };

  return (
    <div>
      {activeChannel.id && (
        <FontAwesomeIcon
          icon={faUsersRectangle}
          onClick={handleAddUserToChannel}
        />
      )}
      {allCurrentChannelMessages.map((message) => (
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
