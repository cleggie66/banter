import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { createWorkspaceThunk } from "../../../store/workspace";

const WorkspaceForm = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [name, setName] = useState('');
    const [icon, setIcon] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault()

        const payload = {
            name,
            icon
        }

        // TODO: Dispatch Thunk to create workspace
        let addedWorkspace = await dispatch(createWorkspaceThunk(payload))
        if (addedWorkspace) {
        history.push(`/dashboard/${addedWorkspace.id}`)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Workspace Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Icon Image Link"
                value={icon}
                onChange={(e) => setIcon(e.target.value)}
            />
        <button type="submit">Create Workspace</button>
        </form>
    )
}

export default WorkspaceForm;