import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { getWorkspaceByIdThunk } from "../../../store/workspace";
import { getAllChannelsThunk } from "../../../store/channel";
import ChannelCard from "./ChannelCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import OpenModalButton from "../../OpenModalButton";

import "./ChannelIndex.css";
import ManageChannelModal from "../ManageChannel";

const ChannelsIndex = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [openMenu, setOpenMenu] = useState(false);
  const { workspaceId } = useParams();

  useEffect(() => {
    dispatch(getWorkspaceByIdThunk(workspaceId));
  }, [dispatch, workspaceId]);

  useEffect(() => {
    dispatch(getAllChannelsThunk());
  }, [dispatch]);

  const allChannels = useSelector((state) => Object.values(state.channels));
  const correctChannels = allChannels.filter(
    (e) => Number(workspaceId) === e.workspace_id
  );
  // console.log(correctChannels)

  // Arrow drop down
  const handleMenuClick = (e) => {
    e.preventDefault();
    setOpenMenu((open) => !open);
  };

  const handleAddChannel = (e) => {
    e.preventDefault();
    history.push(`/dashboard/${workspaceId}/newchannel`)
  };


  return (
    <>
      <div className="channel-dropdown-container">
        <div className="channel-dropdown-heading-container">
          <FontAwesomeIcon
            icon={faCaretDown}
            style={{ opacity: 0.8 }}
            onClick={handleMenuClick}
            className="caret-down"
          />
          <p></p>
          {/* MODAL HEREEEEEEEEEEEEE */}
          <div className={"channel-heading"}> <OpenModalButton
            buttonText="Channels"
            modalComponent={<ManageChannelModal />}
          /></div>
        </div>
        <div
          className={`channel-dropdown-container ${
            openMenu ? "active" : "inactive"
          }`}
        >
          {correctChannels.map((channel) => (
            <ChannelCard key={channel.id} channel={channel} />
          ))}
          <div className="add-channel-container">
           
          {/* {"Add a Channel"} */}
          <button className={'add-channel-button'} onClick={handleAddChannel}> <FontAwesomeIcon icon={faPlusSquare} /> Add a Channel</button>
          </div>
        </div>
      </div>
      <div>
        <FontAwesomeIcon icon={faCaretDown} style={{ opacity: 0.8 }} />
        {"Direct messages"}
      </div>
    </>
  );
};

export default ChannelsIndex;
