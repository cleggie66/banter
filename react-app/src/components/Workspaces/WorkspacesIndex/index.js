import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const WorkspacesIndex = () => {

    const dispatch = useDispatch();

    // TODO: Update to new action after merge
    useEffect(() => {
        // dispatch(getAllWorkspaces());
    }, [dispatch])

    // TODO: Update to new state after merge
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