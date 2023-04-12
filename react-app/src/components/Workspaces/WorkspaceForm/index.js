import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

const WorkspaceForm = () => {
    const dispatch = useDispatch()
    const [name, setName] = useState('');
    const [icon, setIcon] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault()

        const payload = {
            name,
            icon
        }

        // TODO: Dispatch Thunk to create workspace

        return <Redirect to="/" />
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
        </form>
    )
}

export default WorkspaceForm
