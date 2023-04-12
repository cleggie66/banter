import React from "react";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import CreateChannelForm from "./CreateChannelForm";
import "./CreateSpot.css";

const CreateChannel = () => {
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);
  const { workspaceId } = useParams();

  useEffect(() => {
    dispatch(getWorkspaceByIdThunk(workspaceId));
  }, [dispatch, workspaceId]);

  if (!sessionUser) {
    history.push(`/home`);
  }

  return (
    <div>
      <CreateChannelForm workspaceId={workspaceId}/>
    </div>
  );
};

export default CreateChannel;
