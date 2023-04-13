import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import { signUp } from "../../store/session";
import { useHistory } from "react-router-dom";
import "./NewDMModel.css"

function NewDMModal() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const { closeModal } = useModal();

    const handleSubmit = async (e) => {

    };

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
