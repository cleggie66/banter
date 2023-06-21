import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getWorkspaceByIdThunk } from "../../../store/workspace";
import ChannelDisplay from "./ChannelDisplay";
import { loadActiveWorkspace } from "../../../store/activeWorkspace";


const UpdateChannel = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const sessionUser = useSelector((state) => state.session.user);
  const workspaces = useSelector((state) => state.workspaces);

  if (!sessionUser) {
    history.push(`/home`);
  }

  const { workspaceId } = useParams();

  useEffect(() => {
    dispatch(getWorkspaceByIdThunk(Number(workspaceId)));
  }, [dispatch, workspaceId]);

  const workspaceName = workspaces[Number(workspaceId)]?.name

  const correctChannels = sessionUser.joined_channels.filter(
    (e) => e.is_channel === true && e.workspace_id === Number(workspaceId)
  );

  return (
    <div className="your-channels-container">
      <div id="manage-channels-user-wrapper">
      <h1 id="channels-title" className="title-text">Explore {workspaceName} channels </h1>
      </div>
      {correctChannels.length ? correctChannels.map((channel) => (
        <ChannelDisplay
          key={channel.id}
          channel={channel}
          workspaceId={Number(workspaceId)}
        />
      )) : <h3 style={{color:'black', marginLeft:'1.7rem', fontWeight:'600'}}>No channels here ...yet!</h3>}
    </div>
  );
};

export default UpdateChannel;
