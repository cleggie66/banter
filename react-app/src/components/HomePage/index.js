import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import WorkspacesIndex from "../Workspaces/WorkspacesIndex"
import { login } from "../../store/session";
import SignupFormModal from "../SignupFormModal";
import OpenModalButton from "../OpenModalButton";
import './HomePage.css'
import arnold from '../../media/arnold.png'
import hand from '../../media/waving-hand@2x.gif'

const HomePage = () => {
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory()

  const onClick = () => {
    dispatch(login("demo@aa.io", "password" ));
    history.push("/")
  };

    return (
    <div className="main-homepage-div">
        {!sessionUser && (<div className="home-page-main-section-logged-out">
            <div className="home-page-main-section-logged-out-left">
            <h1>Banter is your Digital HQ</h1>
            <p>The only place you need to get stuff done.</p>
            <div className="home-page-button-div">
            <button className='home-page-demo-login' onClick={onClick}>Try a Demo</button>
            <OpenModalButton
            buttonText="TRY FOR FREE"
            modalComponent={<SignupFormModal />}
          />
          </div>
          </div>
          <div className="home-page-main-section-logged-out-right">
          <img className='home-page-main-section-logged-out-image'src={arnold}/>
          </div>

        </div>)}


        {sessionUser && (
            <div className="main-section-logged-in">


            <div className="welcome-back-title">
            <h1 className="test">
            <img className='waving-hand' src={hand}/>
                Welcome back!
            </h1>
            </div>

                <WorkspacesIndex/>

            </div>
        )}

</div>
    )
}

export default HomePage
