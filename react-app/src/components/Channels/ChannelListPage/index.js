import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllChannelsThunk } from "../../../store/channel";
import ChannelCard from "./ChannelCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import "./ChannelListForm.css";

const ListChannels = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllChannelsThunk());
  }, [dispatch]);

  const allChannels = useSelector((state) => Object.values(state.channels));

  // if (!allChannels) return null;

  // Arrow drop down
  const handleMenuClick = (e) => {
    e.preventDefault();
    setOpenMenu((open) => !open);
  };

  return (
    <>
      {/* <h1> ⬇️ Channels</h1> */}
      <div className="channel-dropdown">
        <FontAwesomeIcon
          icon={faCaretDown}
          style={{ opacity: 0.8 }}
          onClick={handleMenuClick}
        />{" "}
        {"Channels"}
        <div className={`channel-dropdown ${openMenu ? "active" : "inactive"}`}>
          {allChannels.map((channel) => (
            <ChannelCard key={channel.id} channel={channel} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ListChannels;
