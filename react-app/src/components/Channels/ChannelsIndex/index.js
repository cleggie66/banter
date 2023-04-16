import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { getWorkspaceByIdThunk } from "../../../store/workspace";
import { getAllChannelsThunk } from "../../../store/channel";
import ChannelCard from "./ChannelCard";
import DirectMessageCard from "./DirectMessageCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretRight, faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import OpenModalButton from "../../OpenModalButton";
import ManageChannelModal from "../ManageChannel";
import NewDMModal from "../../Messages/NewDMModel";
import "./ChannelIndex.css";

const ChannelsIndex = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const sessionUser = useSelector((state) => state.session.user);

  const [openChannelMenu, setOpenChannelMenu] = useState(true);
  const [openMessageMenu, setOpenMessageMenu] = useState(false);
  const { workspaceId } = useParams();

  useEffect(() => {
    dispatch(getWorkspaceByIdThunk(workspaceId));
  }, [dispatch, workspaceId]);

  useEffect(() => {
    dispatch(getAllChannelsThunk());
  }, [dispatch]);

  // const allChannels = sessionUser.joined_channels.filter(
  //   (e) =>  e.is_channel === true
  // );

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
  const allDMS = channelState.filter(
    (e) =>
      Number(workspaceId) === e.workspace_id &&
      e.is_channel === false &&
      usersCheck(e.users_in_channels)
  );

  // Arrow drop down
  const handleChannelMenuClick = (e) => {
    e?.preventDefault();
    setOpenChannelMenu((open) => !open);
  };

  const handleMessageMenuClick = (e) => {
    e?.preventDefault();
    setOpenMessageMenu((open) => !open);
  };

  const handleAddChannel = (e) => {
    e.preventDefault();
    history.push(`/dashboard/${workspaceId}/newchannel`);
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


  return (
    <>
      <div className="channel-dropdown-container">
        <div className="channel-dropdown-heading-container">
          <AnimatedCaret
            open={openChannelMenu}
            onClick={handleChannelMenuClick}
            className="caret-down"
          />
          <div className="channel-heading">
            <OpenModalButton
              className="channels-button-modal-sidebar"
              buttonText="Channels"
              modalComponent={<ManageChannelModal workspaceId={workspaceId} />}
            />
          </div>
        </div>
        <div
          className={`channel-dropdown-container ${
            openChannelMenu ? "active" : "inactive"
          }`}
        >
          {allChannels.map((channel) => (
            <ChannelCard key={channel.id} channel={channel} />
          ))}
          <div className="channel-list-item" onClick={handleAddChannel}>
            <FontAwesomeIcon
              icon={faPlusSquare}
              id="fa-dropdown-arrow"
            />
            <p id="add-channel-sidebar" className="channels-button-modal-sidebar">Add a Channel</p>
          </div>
        </div>
      </div>
      <div className="channel-dropdown-heading-container">
        <AnimatedCaret
          open={openMessageMenu}
          onClick={handleMessageMenuClick}
          className="caret-right"
        />
        {" "}
        <div className="channel-heading-2">
          <OpenModalButton
            className="channels-button-modal-sidebar"
            buttonText="Direct messages"
            modalComponent={<NewDMModal workspaceId={workspaceId} />}
          />
        </div>
      </div>
      <div
        className={`channel-dropdown-container ${
          openMessageMenu ? "active" : "inactive"
        }`}
      >
        {allDMS.map((channel) => (
          <DirectMessageCard
            key={channel.id}
            channel={channel}
            sessionUser={sessionUser}
          />
        ))}
        <div className="channel-list-item">
          <FontAwesomeIcon
            icon={faPlusSquare}
            id="fa-dropdown-arrow"
          />
          <OpenModalButton
            className="channels-button-modal-sidebar"
            buttonText="New Message"
            modalComponent={<NewDMModal workspaceId={workspaceId} />}
          />
        </div>
      </div>
    </>
  );  
};

export default ChannelsIndex;
