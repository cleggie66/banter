import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser} from "@fortawesome/free-solid-svg-icons";


import './Navigation.css';

function Navigation({ isLoaded }){
	const sessionUser = useSelector(state => state.session.user);


	let sessionLinks;
	if (sessionUser) {
	  sessionLinks = (
		<></>
		// <div>
		//   <ProfileButton user={sessionUser} />
		// </div>
	  );
	} else {
	  sessionLinks = (
		<div>
		  <OpenModalButton
			buttonText="Log In"
			
			modalComponent={<LoginFormModal />}
		  />
		  <div></div>
		  <OpenModalButton
			buttonText="Sign Up"
			modalComponent={<SignupFormModal />}
		  />
		  <DemoLogin />
		</div>
	  );
	}
	
	return (
		<div></div>
		// <ul>
		// 	<li>
		// 		<NavLink exact to="/">Home</NavLink>
		// 	</li>
		// 	{isLoaded && (
		// 		<li>
		// 			<ProfileButton user={sessionUser} />
		// 		</li>
		// 	)}
		// </ul>
	);
}

export default Navigation;
