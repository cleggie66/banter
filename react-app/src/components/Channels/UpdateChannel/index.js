import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getWorkspaceByIdThunk } from "../../../store/workspace";
import ChannelDisplay from "./ChannelDisplay";


const UpdateChannel = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const sessionUser = useSelector((state) => state.session.user);

  const correctChannels = sessionUser.joined_channels.filter(
    (e) => e.is_channel === true
  );

  if (!sessionUser) {
    history.push(`/home`);
  }

  const { workspaceId } = useParams();

  useEffect(() => {
    dispatch(getWorkspaceByIdThunk(Number(workspaceId)));
  }, [dispatch, workspaceId]);

  return (
    <div className="your-channels-container">
      <h1 id="channels-title" className="title-text">Explore channels </h1>
      {correctChannels.map((channel) => (
        <ChannelDisplay
          key={channel.id}
          channel={channel}
          workspaceId={Number(workspaceId)}
        />
      ))}
    </div>
  );
};

export default UpdateChannel;
