import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllWorkspacesThunk } from "../../../store/workspace";
import WorkspaceCard from "./WorkspaceCard";

const WorkspacesIndex = () => {
  const sessionUser = useSelector((state) => state.session.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllWorkspacesThunk());
  }, [dispatch]);

  const allWorkspaces = useSelector((state) => Object.values(state.workspaces));

  console.log(allWorkspaces);
  // const allOwnedWorkspaces = allWorkspaces.filter(
  //     (e) => sessionUser.id === e.owner_id
  //   );
  //   console.log(allOwnedWorkspaces)

  // if (!allWorkspaces) return null;

  return (
    <>
      <h1>Workspaces</h1>
      <div>
        {allWorkspaces.map((workspace) => (
          <WorkspaceCard key={workspace.id} workspace={workspace} />
        ))}
      </div>
    </>
  );
};

export default WorkspacesIndex;
