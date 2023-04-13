import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllWorkspacesThunk } from "../../../store/workspace";
import WorkspaceCard from "./WorkspaceCard";
import { clearActiveChannelThunk } from "../../../store/activeChannel";
import { refreshUser } from "../../../store/session";
import "./WorkSpacesIndex.css";

const WorkspacesIndex = () => {
  const sessionUser = useSelector((state) => state.session.user);
  const allJoinedWorkspaces = useSelector(
    (state) => state.session.user.joined_workspaces
  );

  const dispatch = useDispatch();

  // every workspace ever made
  // const allWorkspaces = useSelector((state) => Object.values(state.workspaces));

  useEffect(() => {
    dispatch(getAllWorkspacesThunk());
    dispatch(clearActiveChannelThunk());
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
