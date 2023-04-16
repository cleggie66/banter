import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllWorkspacesThunk } from "../../../store/workspace";
import WorkspaceCard from "./WorkspaceCard";

import { refreshUser } from "../../../store/session";
import "./WorkSpacesIndex.css";
import { clearActiveChannel } from "../../../store/activeChannel";

const WorkspacesIndex = () => {
  const sessionUser = useSelector((state) => state.session.user);
  const allJoinedWorkspaces = useSelector(
    (state) => state.session.user.joined_workspaces
  );

  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getAllWorkspacesThunk());
    dispatch(clearActiveChannel());
    dispatch(refreshUser(sessionUser.id));
  }, [dispatch]);

  return (
    <>
      <h1>Your Workspaces</h1>
      <div className="workspace-list-area">
        {allJoinedWorkspaces.map((workspace) => (
          <WorkspaceCard key={workspace.id} workspace={workspace} />
        ))}
      </div>
    </>
  );
};

export default WorkspacesIndex;
