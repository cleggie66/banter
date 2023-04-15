import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
// import { useHistory } from "react-router-dom";
import ChannelsIndex from "../Channels/ChannelsIndex";
import ActiveWorkspace from "../Workspaces/ActiveWorkspace";
import MessagesIndex from "../Messages/MessagesIndex";
import LoadingPage from "../LoadingPage";

import "./Dashboard.css"
import { useParams } from "react-router-dom";

const Dashboard = () => {
  const sessionUser = useSelector((state) => state.session.user);
  const {workspaceId} = useParams()

  // const activeChannel = useSelector((state) => state.activeChannel)
  const [loadingVisibility, setLoadingVisibility] = useState("visible")
  // const history = useHistory();

  useEffect(() => {
    const loadingPageTimer = setTimeout(() => {
      setLoadingVisibility("hidden")
    }, 3000);
    return () => clearTimeout(loadingPageTimer)
  }, [])


//  can see channel index and message index
// ! REFACTOR REFACTOR LETS UPDATE ACTIVE WORKSPACE FOR EVERYTHING

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
            <MessagesIndex workspaceId={workspaceId}/>
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
