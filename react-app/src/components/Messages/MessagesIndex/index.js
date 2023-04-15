import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingIcon from "../../LoadingPage/LoadingIcon";
import MessageCard from "./MessageCard";
import "./MessagesIndex.css";
import '../MessageForm/MessageForm.css'
import { useState } from "react";
import { createMessageThunk } from "../../../store/message";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { io } from 'socket.io-client';
import { deleteMessageThunk } from "../../../store/message";
import { getAllChannelMessagesThunk } from "../../../store/message";

let socket;

function MessagesIndex() {
  const sessionUser = useSelector((state) => state.session.user);
  const activeChannel = useSelector((state) => state.activeChannel);
  const allMessages = useSelector((state) => Object.values(state.messages));
  const state = useSelector(state => state)
  const dispatch = useDispatch();
  const [content, setContent] = useState('');
  const [messages, setMessages] = useState(allMessages)
  const user = useSelector((state) => state.session.user);

  console.log(messages)

  const allCurrentChannelMessages = allMessages.filter(
    (e) => activeChannel.id === e.channel_id
  );

  useEffect(() => {
    socket = io();
    socket.on("chat", (chat) => {
        // when we recieve a chat, add it into our messages array in state
        setMessages(messages => [...messages, chat])
    });

    socket.on('delete', (chat) => {
      setMessages(messages => {
        return messages.filter(message => message.id !== chat.id);
      });
    });
    return (() => {
        socket.disconnect()
    })
}, [])


  useEffect(() => {
   setMessages(allCurrentChannelMessages)
  }, [allCurrentChannelMessages?.length])



    const handleCreate = async (e) => {
        e.preventDefault()

        const payload = {
            content,
            channel_id: activeChannel?.id
        }


        let res = await dispatch(createMessageThunk(payload))
        if (res) {
            if (socket) {
                socket.emit("chat", {id: res.id, user_id: user?.id, channel_id: activeChannel?.id, username: user?.username, content: content, profile_picture: user?.profile_picture, first_name: user?.first_name, last_name: user?.last_name});
            }
            setContent("")
        }
    }


    const handleDeleteMessage = async (e, message) => {
      e.preventDefault()
      if (socket) {
        await dispatch(deleteMessageThunk(message.id))
        socket.emit('delete', {id: message.id, user: user.username, msg: message.content})
      }

    }


  if (!allCurrentChannelMessages) {
    return <LoadingIcon />;
  }

  return (
    <div>
      {messages?.map((message) => (
        <MessageCard
          key={message.id}
          sessionUser={sessionUser}
          activeChannel={activeChannel}
          message={message}
          socket={socket}
          user={sessionUser}
          handleDeleteMessage={handleDeleteMessage}
          messages={messages}
          setMessages={setMessages}
        />
      ))}
      {activeChannel.id && (
        <div className="create-message-form">
        <form onSubmit={handleCreate} id="form-1">
            <input
                className="create-message-input"
                type="textarea"
                placeholder="Type your message here..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
        </form>
        <button
        className="create-message-button"
        type="submit"
        form="form-1">
            <FontAwesomeIcon
            icon={faPaperPlane}
            className="create-message-icon"
            />
            </button>
    </div>
      )}
    </div>
  );
}

export default MessagesIndex;
