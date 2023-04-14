import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import ChannelsIndex from "../Channels/ChannelsIndex";
import ActiveWorkspace from "../Workspaces/ActiveWorkspace";
import MessagesIndex from "../Messages/MessagesIndex";
import MessageForm from "../Messages/MessageForm";
import LoadingPage from "../LoadingPage";

import "./Dashboard.css"

const Dashboard = () => {
  const sessionUser = useSelector((state) => state.session.user);
  // const activeChannel = useSelector((state) => state.activeChannel)
  const [loadingVisibility, setLoadingVisibility] = useState("visible")
  // const history = useHistory();

  useEffect(() => {
    const loadingPageTimer = setTimeout(() => {
      setLoadingVisibility("hidden")
    }, 3000);
    return () => clearTimeout(loadingPageTimer)
  }, [])


 

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
            <MessagesIndex />
            <MessageForm />
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
