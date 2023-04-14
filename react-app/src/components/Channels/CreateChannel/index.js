import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import CreateChannelForm from "./CreateChannelForm";
import { getWorkspaceByIdThunk } from "../../../store/workspace";

const CreateChannel = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const sessionUser = useSelector((state) => state.session.user);
  const { workspaceId } = useParams();

  useEffect(() => {
    dispatch(getWorkspaceByIdThunk(workspaceId));
  }, [dispatch, workspaceId]);

  if (!sessionUser) {
    history.push(`/`);
  }

  return (
    <div>
      <CreateChannelForm workspaceId={workspaceId} />
    </div>
  );
};

export default CreateChannel;
