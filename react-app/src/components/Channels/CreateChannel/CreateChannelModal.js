import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createChannelThunk } from "../../../store/channel";
import "./CreateChannelForm.css";
// I want to send is Channel True and workspace_id current workspace we are in
import { refreshUser } from "../../../store/session";
import { useModal } from "../../../context/Modal";

function AddChannelModal({workspaceId}) {

    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector((state) => state.session.user);
    const {closeModal} = useModal()
    const [name, setName] = useState("");
    const [errors, setErrors] = useState({});
    const [hasSubmitted, setHasSubmitted] = useState(false);


    const handleInputErrors = () => {
        const errorsObj = {};
        if (name.length === 0) {
            errorsObj.name = "Name is required";
        }
        setErrors(errorsObj);
    };

    useEffect(() => {
        handleInputErrors();
    }, [name]);





    const handleFormSubmit = async (e) => {
        e.preventDefault();

        if (!Object.values(errors).length) {
            const channelInformation = {
                name,
                workspace_id: Number(workspaceId),
                is_channel: true,
            };

            let newChannel = await dispatch(createChannelThunk(channelInformation));
            dispatch(refreshUser(sessionUser.id));

            history.push(`/dashboard/${workspaceId}/${newChannel.id}`);
            
        } else {
            return alert('Please provide a channel name')
        }
        setHasSubmitted(true);
        closeModal()
    };
    

    return (
        <>
            {!sessionUser && (
                <h1 className="signin-error">
                    Please sign in to attempt to make a workspace
                </h1>
            )}

            <div className="create-channel-modal-wrapper-2">
                <h2 style={{marginBottom:'4rem'}}>Create a channel</h2>
                <form className="create-channel-form-wrapper" onSubmit={handleFormSubmit}>
               
                        {/* Name:{" "} */}
                        <input
                    id="create-channel-input-field"
                            type="text"
                            placeholder="e.g. plan-budget"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
             
               
                    {hasSubmitted && errors.name && (
                        <p className="errors">{errors.name}</p>
                    )}
                    <input
                        id="create-channel-submit-button"
                        type="submit"
                        value={"Create Channel"}
                        disabled={hasSubmitted && Object.values(errors).length > 0}
                    />
                </form>
            </div>
        </>
    );
}

export default AddChannelModal;