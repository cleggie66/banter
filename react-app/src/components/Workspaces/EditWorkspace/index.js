import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import WorkspaceForm from '../WorkspaceForm'
import { useParams, useHistory } from 'react-router-dom'
import { updateWorkspaceThunk } from '../../../store/workspace'

const EditWorkspace = ({workspace}) => {
    const dispatch = useDispatch()
    const {workspaceId} = useParams();
    const history = useHistory()

    const [name, setName] = useState(workspace?.name);
    const [icon, setIcon] = useState(workspace?.icon);


    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
          name,
          icon
        };

        let editedWorkspace = await dispatch(updateWorkspaceThunk(payload));
        if (editedWorkspace) {
          history.push(`/spots/${editedWorkspace.id}`);
        }
      };

  return (
    <div>
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
            <button type='submit'>Edit Workspace</button>
        </form>
    </div>
  )
}

export default EditWorkspace
