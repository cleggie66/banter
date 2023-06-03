import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import WorkspacesIndex from "../Workspaces/WorkspacesIndex";
import { login } from "../../store/session";
import SignupFormModal from "../SignupFormModal";
import OpenModalButton from "../OpenModalButton";
import "./HomePage.css";
import arnold from "../../media/arnold.png";
import mockup from "../../media/banter-mockup.png";
import hand from "../../media/waving-hand@2x.gif";
import spencer from "../../media/spencer.png";
import caleb from "../../media/caleb.png";
import steven from "../../media/steven.png";
import postgres from "../../media/postgres.png";
import react from "../../media/react.png";
import redux from "../../media/redux.png";
import flask from "../../media/flask.png";
import sqlalchemy from "../../media/sqlalchemy.png";
import python from "../../media/python.png";
import js from "../../media/js.png";
import css from "../../media/css.png";
import html from "../../media/html.png";
import workspace from '../../media/add-workspace.png'

const HomePage = () => {
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const onClick = () => {
    dispatch(login("demo@aa.io", "password"));
    history.push("/");
  };

  const handleCreateWorkspace = (e) => {
    e.preventDefault();
    history.push(`/create-workspace`);
  };

  return (
    <div className="main-homepage-div">
      {!sessionUser && (
        <div className="home-page-main-section-logged-out">
          <div className="home-page-main-section-logged-out-left">
            <div className="home-page-logged-out-left">
              <h1 className="banter-logged-out-header">
                Just a bit of Banter.
              </h1>
              <p>The only place you need to get stuff done.</p>
              <div className="home-page-button-div">
                <button className="home-page-demo-login" onClick={onClick}>
                  TRY A DEMO
                </button>
                <OpenModalButton
                  className="sign-up-button"
                  buttonText="SIGN UP"
                  modalComponent={<SignupFormModal />}
                />
              </div>
            </div>
            <div className="home-page-main-section-logged-out-left">
              <img
                className="home-page-main-section-logged-out-image"
                src={mockup}
                alt="homepage"
              />
            </div>
          </div>
          <div className="team-flex-test">
            <h1>Made with love by...</h1>
            <div className="meet-the-team-home">
             
                <div className="team-member-card">
                  <img
                    className="team-member-card-image"
                    src={spencer}
                    alt="spencer"
                  />
                  <h3>Spencer Wilfahrt</h3>
                  <div className='team-card-socials-wrapper'>
                  <a target="_blank" href="https://www.linkedin.com/in/spencer-wilfahrt-1a4604156/">
                  <i class="fa-brands fa-linkedin"></i>
                  </a>
                  <a target="_blank" href="https://github.com/spencerwilf">
                  <i class="fa-brands fa-github"></i>
                  </a>
                  </div>
                </div>
            
           
                <div className="team-member-card">
                  <img
                    className="team-member-card-image"
                    src={caleb}
                    alt="caleb"
                  />
                  <h3>Caleb Cleghorn</h3>
                  <div className='team-card-socials-wrapper'>
                    <a target="_blank" href="https://www.linkedin.com/in/caleb-cleghorn-31843b189/">
                      <i class="fa-brands fa-linkedin"></i>
                    </a>
                    <a target="_blank" href="https://github.com/cleggie66">
                      <i class="fa-brands fa-github"></i>
                    </a>
                  </div>
                </div>
         
             
                <div className="team-member-card">
                  <img
                    className="team-member-card-image"
                    src={steven}
                    alt="steven"
                  />
                  <h3>Steven Anderson</h3>
                  <div className='team-card-socials-wrapper'>
                  <a target="_blank" href="https://www.linkedin.com/in/stevenanderson-dev/">
                      <i class="fa-brands fa-linkedin"></i>
                    </a>
                  <a target="_blank" href="https://github.com/StevenBradleyA">
                      <i class="fa-brands fa-github"></i>
                    </a>
                  </div>
                </div>
            
           
                <div className="team-member-card">
                  <img
                    className="team-member-card-image"
                    src={arnold}
                    alt="jake"
                  />
                  <h3>Jake Gularte</h3>
                  <div className='team-card-socials-wrapper'>
                  <a target="_blank" href="https://www.linkedin.com/in/jake-gularte-a8904b19b/">
                      <i class="fa-brands fa-linkedin"></i>
                    </a>
                  <a target="_blank" href="https://github.com/JakeG97">
                      <i class="fa-brands fa-github"></i>
                    </a>
                  </div>
                </div>
            
            </div>
          </div>

          <div className="carousel-container">
            <h1 className="technologies-utilized-text">
              Technologies Utilized
            </h1>
            <div className="carousel-slides">
              <div className="carousel-slide">
                <img
                  className="carousel-image"
                  src={postgres}
                  alt="coding language"
                />
              </div>
              <div className="carousel-slide">
                <img
                  className="carousel-image"
                  src={react}
                  alt="coding language"
                />
              </div>
              <div className="carousel-slide">
                <img
                  className="carousel-image"
                  src={redux}
                  alt="coding language"
                />
              </div>
              <div className="carousel-slide">
                <img
                  className="carousel-image"
                  src={flask}
                  alt="coding language"
                />
              </div>
              <div className="carousel-slide">
                <img
                  className="carousel-image"
                  src={sqlalchemy}
                  alt="coding language"
                />
              </div>
              <div className="carousel-slide">
                <img
                  className="carousel-image"
                  src={python}
                  alt="coding language"
                />
              </div>
              <div className="carousel-slide">
                <img
                  className="carousel-image"
                  src={js}
                  alt="coding language"
                />
              </div>
              <div className="carousel-slide">
                <img
                  className="carousel-image"
                  src={css}
                  alt="coding language"
                />
              </div>
              <div className="carousel-slide">
                <img
                  className="carousel-image"
                  src={html}
                  alt="coding language"
                />
              </div>

            </div>

          </div>
          {/* <div>Footer</div> */}
        </div>
       

      )}

      {sessionUser && (
        <div className="main-section-logged-in">
          <div className="welcome-back-title">
            <h1 className="test">
              <img className="waving-hand" src={hand} />
              Welcome back!
            </h1>
          </div>

          <WorkspacesIndex />
          <div className="add-a-workspace">
            <img className="signed-in-workspaces-clipart"  src={workspace} alt="" />
            <p style={{ color:'#4A174B', marginLeft:'17vw', fontWeight:'700'}}>Want to use Banter with a different team?</p>
            <button className="create-new-ws-container-button" onClick={handleCreateWorkspace}>CREATE A NEW WORKSPACE</button>
          </div>
        </div>
      )}

    </div>
  );
};

export default HomePage;
