import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllWorkspacesThunk } from "../../../store/workspace";

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
                    <h2 key={workspace.id}>{workspace.name}</h2>
                ))}
            </div>
        </>
    )
}

export default WorkspacesIndex