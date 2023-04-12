
// import React, { useState } from "react";
// import { login } from "../../store/session";
// import { useDispatch } from "react-redux";
// import { useModal } from "../../context/Modal";
// import { useHistory } from "react-router-dom";
// import "./LoginForm.css";

// function CreateChannelModal() {
//   const dispatch = useDispatch();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [errors, setErrors] = useState([]);
//   const { closeModal } = useModal();
//   const history = useHistory();


//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const data = await dispatch(login(email, password));
//     if (data) {
//       setErrors(data);
//     } else {
//         closeModal()
//         history.push("/home")
//     }
//   };

//   return (
//     <>
//       <h1>Log In</h1>
//       <form onSubmit={handleSubmit}>
//         <ul>
//           {errors.map((error, idx) => (
//             <li key={idx}>{error}</li>
//           ))}
//         </ul>
//         <label>
//           Email
//           <input
//             type="text"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </label>
//         <label>
//           Password
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </label>
//         <button type="submit">Log In</button>
//       </form>
//     </>
//   );
// }

// export default CreateChannelModal;
































// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Redirect } from "react-router-dom";

// const ChannelForm = () => {
//     const dispatch = useDispatch()
//     const [name, setName] = useState('');
//     const [isChannel, setIsChannel] = useState(false);

//     const handleSubmit = async (e) => {
//         e.preventDefault()

//         const payload = {
//             name,
//             isChannel
//         }

//         // TODO: Dispatch Thunk to create channel
//         // TODO: Dispatch Thunk to add channel members

//         return <Redirect to="/" />
//     }

//     return (
//         <form onSubmit={handleSubmit}>
//             <input
//                 type="text"
//                 placeholder="Name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//             />
//             <input
//                 type="radio"
//                 label="Is this a channel?"
//                 value={isChannel}
//                 onChange={(e) => setIsChannel(e.target.value)}
//             />
//         </form>
//     )
// }
