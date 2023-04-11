import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getWorkspaceByIdThunk } from "../../../store/workspace"
import { useParams } from "react-router-dom"

const ActiveWorkspace = () => {
    // const dispatch = useDispatch()
    // const { workspaceId } = useParams()

    // useEffect(() => {
    //     dispatch(getWorkspaceByIdThunk(workspaceId))
    // }, [dispatch, workspaceId])

    // const allWorkspaces = useSelector((state) => Object.values(state.workspaces))

    // console.log(allWorkspaces)

    // const activeWorkspace = allWorkspaces[workspaceId]
    
    // console.log("PARAMS WORKSPACE ID", workspaceId)
    // console.log("ACTIVE WORKSPACE ID", activeWorkspace.id)

    // if (!activeWorkspace) {
    //     return <h1>Loading...</h1>
    // }



    return (
        <h2>In progress</h2>
        // <h2>{activeWorkspace.name}</h2>
    )
}

export default ActiveWorkspace