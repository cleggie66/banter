import React, { useState, useEffect } from "react";
// import { useHistory } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { createChannelThunk } from "../../../store/channel";
// import { refreshUser } from "../../../store/session";

// ! memory leak useEffect for name errors only needs to run when in box
// needs a clean up funciton for useEffect()

function UpdateUserForm() {
//   const dispatch = useDispatch();
//   const [name, setName] = useState("");
//   const [errors, setErrors] = useState({});
//   const [hasSubmitted, setHasSubmitted] = useState(false);
//   const history = useHistory();
//   const sessionUser = useSelector((state) => state.session.user);


//   const handleInputErrors = () => {
//     const errorsObj = {};
//     if (name.length === 0) {
//       errorsObj.name = "Name is required";
//     }
//     setErrors(errorsObj);
//   };

//   useEffect(() => {
//     handleInputErrors();
//   }, [name]);

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();

//     if (!Object.values(errors).length) {
//       const channelInformation = {
//         name,
//         workspace_id: Number(workspaceId),
//         is_channel: true,
//       };

//       let newChannel = await dispatch(createChannelThunk(channelInformation));
//       dispatch(refreshUser(sessionUser.id))

//       // console.log("big sends", newChannel)
//       history.push(`/dashboard/${workspaceId}/${newChannel.id}`);
//     }
//     setHasSubmitted(true);
//   };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <label>
          Name
          {/* <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          /> */}
        </label>
        <p></p>
        {/* {hasSubmitted && errors.name && <p className="errors">{errors.name}</p>}
        <input
          type="submit"
          value={"Create Channel"}
          disabled={hasSubmitted && Object.values(errors).length > 0}
        /> */}
      </form>
    </>
  );
}

export default UpdateUserForm;
