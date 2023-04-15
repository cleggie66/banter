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

let socket;
let sortedMessages;

function MessagesIndex() {
  const sessionUser = useSelector((state) => state.session.user);
  const activeChannel = useSelector((state) => state.activeChannel);
  const allMessages = useSelector((state) => Object.values(state.messages));
  const dispatch = useDispatch();
  const [content, setContent] = useState('');
  const [messages, setMessages] = useState([])
  const user = useSelector((state) => state.session.user);

  useEffect(() => {
    console.log(sortedMessages)
  }, [sortedMessages])

    useEffect(() => {
        socket = io();
        socket.on("chat", (chat) => {
            // when we recieve a chat, add it into our messages array in state
            setMessages(messages => [...messages, chat])
        });

        socket.on('delete', (chat) => {
          let index = sortedMessages?.findIndex(msg => msg.id == chat.id);

          let foundMessages = messages.filter((_, i) => i !== index)
          setMessages(foundMessages)

        })
        return (() => {
            socket.disconnect()
        })
    }, [activeChannel, user])


    const allCurrentChannelMessages = allMessages.filter(
      (e) => activeChannel.id === e.channel_id
    );


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
      await dispatch(deleteMessageThunk(message.id))
      socket.emit('delete', {user: user.username, msg: message.content})
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
