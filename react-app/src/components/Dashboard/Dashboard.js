import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
// import { useHistory } from "react-router-dom";
import ChannelsIndex from "../Channels/ChannelsIndex";
import ActiveWorkspace from "../Workspaces/ActiveWorkspace";
import MessagesIndex from "../Messages/MessagesIndex";
import LoadingPage from "../LoadingPage";

import "./Dashboard.css"

const Dashboard = () => {
  const sessionUser = useSelector((state) => state.session.user);
  const activeChannel = useSelector((state) => state.activeChannel)
  const currentChannel = useSelector((state) => state.channels[activeChannel.id])
  const [loadingVisibility, setLoadingVisibility] = useState("visible")
  // const history = useHistory();


  useEffect(() => {
    const loadingPageTimer = setTimeout(() => {
      setLoadingVisibility("hidden")
    }, 3000);
    return () => clearTimeout(loadingPageTimer)
  }, [])


//  can see channel index and message index
//

  return (
    <div className="page">
      {sessionUser && (
        <>
          <LoadingPage visibility={loadingVisibility} />
          <div className="left-bar">
            <ActiveWorkspace />
            <ChannelsIndex />
          </div>
          <div className="right-bar">
            <div className="current-channel-name-bar">
              <span className="current-channel-name-text">#{currentChannel?.name}</span>
           </div>
            <MessagesIndex />
          </div>
        </>
      )}
      {/* {!sessionUser && !homepage && (
        <>
          <h1>{`To access your Banter please log in`}</h1>
          <button onClick={handleRedirectHome}>Take me Home 🫡</button>
        </>
      )} */}
    </div>
  );
};

export default Dashboard;
