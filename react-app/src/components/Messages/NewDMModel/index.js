import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useModal } from "../../../context/Modal";
import { signUp } from "../../../store/session";
import { getWorkspaceByIdThunk } from "../../../store/workspace";
import "./NewDMModel.css"

function NewDMModal({ workspaceId }) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getWorkspaceByIdThunk(workspaceId));
    }, [dispatch, workspaceId]);

    
    const activeWorkspaceState = useSelector((state) => state.workspaces);
    const activeWorkspace = activeWorkspaceState[workspaceId];
    
    const { closeModal } = useModal();
    
    const handleSubmit = async (e) => {
        
    };
    
    console.log(activeWorkspace)
    return (
        <>
            <div className="new-message-container">
                <h1>New Message</h1>
                <button type="submit">Create Message</button>
            </div>
        </>
    );
}

export default NewDMModal;
