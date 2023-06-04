import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getWorkspaceByIdThunk } from "../../../store/workspace";
import { getAllChannelsThunk } from "../../../store/channel";
import ChannelCard from "./ChannelCard";
import DirectMessageCard from "./DirectMessageCard";
import { FontAwesomeIcon,  } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import AddChannelModal from "../CreateChannel/CreateChannelModal";
import { clearActiveChannel } from "../../../store/activeChannel";

import {
  faCaretDown,
  faCaretRight,
  faPlusSquare,
} from "@fortawesome/free-solid-svg-icons";
import OpenModalButton from "../../OpenModalButton";
import ManageChannelModal from "../ManageChannel";
import "./ChannelIndex.css";
import CreateDmModal from "../../Messages/NewDMModel/CreateDmModal";
import { useModal } from "../../../context/Modal";
import { loadActiveWorkspace } from "../../../store/activeWorkspace";

const ChannelsIndex = ({ workspaceId }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { setModalContent } = useModal();

  const sessionUser = useSelector((state) => state.session.user);
  const activeChannel = useSelector((state) => state.activeChannel);
  const activeWorkspace = useSelector((state) => state.activeWorkspace.id);

  const [openChannelMenu, setOpenChannelMenu] = useState(true);
  const [openMessageMenu, setOpenMessageMenu] = useState(false);

  useEffect(() => {
    dispatch(getWorkspaceByIdThunk(workspaceId));
  }, [dispatch, workspaceId]);

  useEffect(() => {
    dispatch(getAllChannelsThunk());
  }, [dispatch]);

  const usersCheck = (usersArray) => {
    let bool = false;
    if (!usersArray) return false;
    usersArray.forEach((user) => {
      if (user.id === sessionUser.id) bool = true;
    });
    return bool;
  };

  const channelState = useSelector((state) => Object.values(state.channels));
  const allChannels = channelState.filter(
    (e) => Number(workspaceId) === e.workspace_id && e.is_channel === true
  );
  const allDirectMessages = channelState.filter(
    (e) =>
      Number(workspaceId) === e.workspace_id &&
      e.is_channel === false &&
      usersCheck(e.users_in_channels)
  );

  // Arrow drop down
  const handleChannelMenuClick = () => {
    setOpenChannelMenu((open) => !open);
  };

  const handleMessageMenuClick = () => {
    setOpenMessageMenu((open) => !open);
  };

  const handleAddChannel = (e) => {
    e.preventDefault();
    setModalContent(<AddChannelModal workspaceId={Number(workspaceId)}/>)
  };

  function AnimatedCaret({ open, onClick, className }) {
    const [icon, setIcon] = useState(open ? faCaretDown : faCaretRight);

    const handleClick = () => {
      setIcon((icon) => (icon === faCaretRight ? faCaretDown : faCaretRight));
      onClick();
    };

    useEffect(() => {
      setIcon(open ? faCaretDown : faCaretRight);
    }, [open]);

    return (
      <FontAwesomeIcon
        icon={icon}
        onClick={handleClick}
        id="fa-dropdown-arrow"
      />
    );
  }

  const handleCreateDmClick = () => {
    dispatch(loadActiveWorkspace(workspaceId));
    setModalContent(<CreateDmModal />);
  };


  const [showMenu, setShowMenu] = useState(false);
  const ulRef = useRef();


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



  const ulClassName = "new-dropdown" + (showMenu ? "" : " hidden");
  const closeMenu = () => setShowMenu(false);


  const setManageChannel = () => {
    history.push(`/dashboard/${activeWorkspace}/explore`)
    dispatch(clearActiveChannel())
    closeMenu()
  }


  const createChannel = () => {
    setModalContent(<AddChannelModal workspaceId={activeWorkspace}/>)
    closeMenu()
  }

  return (
    <>
      <div ref={ulRef} className={ulClassName}>
        <div style={{ borderBottom:'1px solid #DCDCDC'}}>
        <div className="manage-channels-menu-click" onClick={setManageChannel}>Manage channels</div>
        </div>
        <div>
        <div onClick={createChannel} className="create-channel-div-label" style={{padding:'1rem', fontSize:'14px', borderBottomRightRadius:'8px', borderBottomLeftRadius:'8px', cursor:'pointer'}}>Create channel</div>
        </div>
      </div>
      <div className="channel-dropdown-container">
        <div className="channel-dropdown-heading-container">
          <AnimatedCaret
            open={openChannelMenu}
            onClick={handleChannelMenuClick}
            className="caret-down"
          />
          <div className="channel-heading">
            <button onClick={openMenu}
            className="channels-button-modal-sidebar">Channels</button>
          </div>
        
        </div>
        
        <div
          className={`channel-dropdown-container ${
            openChannelMenu ? "active" : "inactive"
          }`}
        >
          {allChannels.map((channel) => (
            <ChannelCard
              key={channel.id}
              channel={channel}
              workspaceId={workspaceId}
              activeChannel={activeChannel}
            />
          ))}
          <div className="channel-list-item" onClick={handleAddChannel}>
            <FontAwesomeIcon icon={faPlusSquare} id="fa-dropdown-arrow" />
            <p
              id="add-channel-sidebar"
              className="channels-button-modal-sidebar"
            >
              Add a Channel
            </p>
          </div>
        </div>
        {/* <OpenModalButton
              className="channels-button-modal-sidebar manage"
              buttonText="Manage Channels"
              modalComponent={<ManageChannelModal workspaceId={workspaceId} />}
            /> */}
      </div>

      <div className="channel-dropdown-heading-container">
        <AnimatedCaret
          open={openMessageMenu}
          onClick={handleMessageMenuClick}
          className="caret-right"
        />{" "}
        <div className="channel-heading-2">
          <button
            className="channels-button-modal-sidebar"
            onClick={handleCreateDmClick}
          >
            Direct messages
          </button>
        </div>
      </div>
      <div
        className={`channel-dropdown-container ${
          openMessageMenu ? "active" : "inactive"
        }`}
      >
        {allDirectMessages.map((channel) => (
          <DirectMessageCard
            key={channel.id}
            channel={channel}
            sessionUser={sessionUser}
            workspaceId={workspaceId}
            activeChannel={activeChannel}
          />
        ))}
        <div className="channel-list-item">
          <FontAwesomeIcon icon={faPlusSquare} id="fa-dropdown-arrow" />
          <button
            className="channels-button-modal-sidebar"
            onClick={handleCreateDmClick}
          >
            New Message
          </button>
        </div>
      </div>
    </>
  );
};

export default ChannelsIndex;
