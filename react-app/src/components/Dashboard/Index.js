import React, { useState, useEffect } from "react";
import ChannelsIndex from "../Channels/ChannelsIndex";
import ActiveWorkspace from "../Workspaces/ActiveWorkspace";

const Dashboard = () => {
    return (
        <div>
            <ActiveWorkspace />
            <ChannelsIndex />
        </div>
    );
};

export default Dashboard;
