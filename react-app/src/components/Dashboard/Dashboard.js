import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChannelsIndex from "../Channels/ChannelsIndex";
import ActiveWorkspace from "../Workspaces/ActiveWorkspace";
import MessagesIndex from "../Messages/MessagesIndex";
import LoadingPage from "../LoadingPage";
import "./Dashboard.css";
import { useParams } from "react-router-dom";

const Dashboard = () => {
  const sessionUser = useSelector((state) => state.session.user);

  const { workspaceId } = useParams();




  return (
    <div className="page">
      {sessionUser && (
        <>
          <div className="left-bar">
            <ActiveWorkspace workspaceId={workspaceId} />
            <ChannelsIndex workspaceId={workspaceId} />
          </div>
          <div className="right-bar">
            <MessagesIndex workspaceId={workspaceId} />
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
