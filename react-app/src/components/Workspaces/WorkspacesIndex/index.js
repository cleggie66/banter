import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllWorkspacesThunk } from "../../../store/workspace";
import WorkspaceCard from "./WorkspaceCard"

const WorkspacesIndex = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllWorkspacesThunk());
    }, [dispatch])

    const workspaces = useSelector((state) => Object.values(state.workspaces));

    if (!workspaces) return null;


    return (
        <>
            <h1>Workspaces</h1>
            <div>
                {workspaces.map((workspace) => (
                    <WorkspaceCard key={workspace.id} workspace={workspace}/>
                ))}
            </div>
        </>
    )
}

export default WorkspacesIndex