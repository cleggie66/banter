import React, { useState, useRef, useEffect } from "react";
import OpenModalButton from "../../OpenModalButton";
import DeleteChannelModal from "../DeleteChannel";
import EditChannelModal from "./EditChannelModal";
import './ChannelDisplay.css'
import { useModal } from "../../../context/Modal";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch } from "react-redux";
import { getChannelByIdThunk } from "../../../store/channel";
import { clearMessage, getAllChannelMessagesThunk } from "../../../store/message";
import { loadActiveChannel } from "../../../store/activeChannel";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const ChannelDisplay = ({ channel, workspaceId }) => {

  const [showMenu, setShowMenu] = useState(false);
  const ulRef = useRef();
  const { setModalContent } = useModal();
  const dispatch = useDispatch()
  const history = useHistory()

  const handleCardClick = (e) => {

    if (showMenu) {
      setShowMenu(false)
    }

    e.preventDefault();
    dispatch(getChannelByIdThunk(channel.id));
    dispatch(clearMessage);
    dispatch(getAllChannelMessagesThunk(channel.id));
    dispatch(loadActiveChannel(channel.id));
    history.push(`/dashboard/${workspaceId}/${channel.name}`);
  };


  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = (e) => {
      if (!ulRef.current?.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);



  const ulClassName = "manage-channel-dropdown" + (showMenu ? "" : " hidden");
  const closeMenu = () => setShowMenu(false);


  const openEdit = () => {
    setModalContent(<EditChannelModal workspaceId={workspaceId} channel={channel} />)
    closeMenu()
  }


  const openDelete = () => {
    setModalContent(<DeleteChannelModal workspaceId={workspaceId} channel={channel} />)
    closeMenu()
  }


  return (
    <>
      <div className={ulClassName} ref={ulRef}>
        <div id="manage-channel-menu-item-wrap-1" style={{ borderBottom: '1px solid #d1d1d1' }} onClick={openEdit}>
          <div id="manage-channel-menu-item">Edit channel</div>
        </div>
        <div id="manage-channel-menu-item-wrap-2">
          <div style={{ color: 'red' }} id="manage-channel-menu-item" onClick={openDelete}>Delete channel</div>
        </div>
      </div>


      <div className={showMenu ? 'message active' : 'message'} id="channel-item-display-wrapper">
        <div className="channel-display-container">
          <h2 onClick={handleCardClick} id="channel-item-menu-name" className="title-text">{`# ${channel.name}`}</h2>
          <button onClick={openMenu} id="manage-channel-popup"><i className="fa-solid fa-ellipsis"></i></button>

          {/* <OpenModalButton
        className="delete-channel-button"
        buttonText="delete"
        modalComponent={
          <DeleteChannelModal workspaceId={workspaceId} channel={channel} />
        }
      />
      <OpenModalButton
        className="edit-channel-button"
        buttonText="edit"
        modalComponent={
          <EditChannelModal workspaceId={workspaceId} channel={channel} />
        }
      /> */}
        </div>

      </div>

    </>
  );
};
export default ChannelDisplay;
