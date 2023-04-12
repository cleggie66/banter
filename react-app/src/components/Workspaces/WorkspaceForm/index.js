import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { createWorkspaceThunk } from "../../../store/workspace";
import './WorkspaceForm.css'

const WorkspaceForm = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector((state) => state.session.user);
    
    const [name, setName] = useState('');
    const [icon, setIcon] = useState('');
    const [validationErrors, setValidationErrors] = useState([]);
    const [hasSubmitted, setHasSubmitted] = useState(false)


    function isImage(url) {
        const check = /\.(png|jpe?g)$/i;
        return check.test(url)
    }

    useEffect(() => {
        const errors = [];
        if(!user) errors.push("Please Log In");
        if (!name) errors.push('Please enter a name for your new workspace');
        if (name.length < 1 || name.length > 50) errors.push('Please enter a name between 1 and 50 characters');
        if (!icon) errors.push('Please link an image to set as the icon for your workspace');
        else if (!isImage(icon)) errors.push('Please enter a valid image URL ending in .png, .jpg, or .jpeg')
        if (icon.length < 1 || icon.length > 255) errors.push('Please enter a link that is no larger than 255 characters')

        setValidationErrors(errors);
    }, [name, icon])

    const handleSubmit = async (e) => {
        e.preventDefault()
        setHasSubmitted(true);
        if (validationErrors.length) return alert("Cannot Submit");
        const payload = {
            name,
            icon
        }
        let addedWorkspace = await dispatch(createWorkspaceThunk(payload))
        if (addedWorkspace) {
            history.push(`/dashboard/${addedWorkspace.id}`)
        }
    }

    return (
        <div className="workspace-form-container">
            <form onSubmit={handleSubmit}>
                {!user && <h1 className="signin-error">Please Sign In</h1>}
                <div className="form-field">
                    {hasSubmitted && validationErrors.includes('Please enter a name for your new workspace') && <p className="error">Please enter a name for your new workspace</p>}
                    {hasSubmitted && validationErrors.includes('Please enter a name between 1 and 50 characters') && <p className="error">Please enter a name between 1 and 50 characters</p>}
                    <h1 id="name-title-text" className="title-text">What’s the name of your company or team?</h1>
                    <p id="icon-title-text" className="title-text">This will be the name of your Banter workspace — choose something that your team will recognize.</p>
                    <input
                        className="text-input-workspace"
                        type="text"
                        placeholder="Workspace Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="form-field">
                    {hasSubmitted && validationErrors.includes('Please link an image to set as the icon for your workspace') && <p className="error">Please link an image to set as the icon for your workspace</p>}
                    {hasSubmitted && validationErrors.includes('Please enter a link that is no larger than 255 characters') && <p className="error">Please enter a link that is no larger than 255 characters</p>}
                    {hasSubmitted && validationErrors.includes('Please enter a valid image URL ending in .png, .jpg, or .jpeg') && <p className="error">Please enter a link that is a proper image file (ie. jpg, jpeg, png, etc.)</p>}
                    <input
                        className="text-input-workspace"
                        type="text"
                        placeholder="Icon Image Link"
                        value={icon}
                        onChange={(e) => setIcon(e.target.value)}
                    />
                </div>
                <button className="create-workspace-button" type="submit">Create Workspace</button>
            </form>
        </div>
    );
}

export default WorkspaceForm;