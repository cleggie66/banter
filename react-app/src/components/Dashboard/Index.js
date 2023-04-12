import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import ChannelsIndex from "../Channels/ChannelsIndex";
import ActiveWorkspace from "../Workspaces/ActiveWorkspace";
import MessagesIndex from "../Messages/MessagesIndex";

const Dashboard = () => {
  const sessionUser = useSelector((state) => state.session.user);
  const activeChannel = useSelector((state) => state.activeChannel)
  const history = useHistory();

  const handleRedirectHome = (e) => {
    e.preventDefault();
    history.push(`/home`);
  };
  const homepage = !window.location.pathname.includes("/dashboard");

  return (
    <div>
      {sessionUser && (
        <>
          <ActiveWorkspace />
          <ChannelsIndex />
          <MessagesIndex />
        </>
      )}
      {!sessionUser && !homepage && (
        <>
          <h1>{`To access your Banter please log in`}</h1>
          <button onClick={handleRedirectHome}>Take me Home 🫡</button>
        </>
      )}
    </div>
  );
};

export default Dashboard;
