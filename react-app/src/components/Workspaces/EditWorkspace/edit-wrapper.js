import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router';
import EditWorkspace from '.';
import { getAllWorkspacesThunk } from '../../../store/workspace';

const EditWorkspaceWrapper = () => {

    const dispatch = useDispatch();
    const {workspaceId} = useParams();
    const workspacesGroup = useSelector(state => state.workspaces)

    const workspace = workspacesGroup[workspaceId]

    useEffect(() => {
        dispatch(getAllWorkspacesThunk())
    }, [dispatch])


    if (!workspace) {
        return null;
    } else {
        return (<EditWorkspace workspace={workspace}/>);
    }
}

export default EditWorkspaceWrapper
