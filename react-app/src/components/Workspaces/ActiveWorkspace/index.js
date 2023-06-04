import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWorkspaceByIdThunk } from "../../../store/workspace";
import { useModal } from "../../../context/Modal";
import ManageWorkspaceModal from "./ManageWorkspaceModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faAngleDown, faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";
import "../../Dashboard/Dashboard.css";
import { loadActiveWorkspace } from "../../../store/activeWorkspace";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { clearActiveChannel } from "../../../store/activeChannel";

const ActiveWorkspace = ({ workspaceId }) => {
  const dispatch = useDispatch();
  const { setModalContent } = useModal();
  const history = useHistory();
  const {pathname} = useLocation()

  useEffect(() => {
    dispatch(getWorkspaceByIdThunk(workspaceId));
  }, [dispatch, workspaceId]);

  const activeWorkspace = useSelector((state) => state.workspaces);
  const newActiveWorkspace = activeWorkspace[workspaceId];

  if (!newActiveWorkspace) {
    return null;
  }

  const handleWorkspaceNameClick = () => {
    setModalContent(<ManageWorkspaceModal workspace={newActiveWorkspace} />);
    dispatch(loadActiveWorkspace(workspaceId));
  };

  const handleExplore = () => {
    dispatch(clearActiveChannel())
    history.push(`/dashboard/${workspaceId}/explore`)
  }

  return (
    <>
    <div className="workspace-upper-section">
      <button
      className="dashboard-workspace-name"
      onClick={handleWorkspaceNameClick}
    >
      <span className="workspace-and-icon-menu">
      {`${newActiveWorkspace.name}`}
      </span>
      <FontAwesomeIcon style={{fontSize:'14px'}} icon={faChevronDown}/>
    
    </button>
    {/* <div>Explore channels</div> */}
      
    </div>
      <div style={{ borderBottom:'1px solid #512653', width:'100%', paddingBottom:'1rem'}}>
        <div className={pathname.includes('explore') ? "explore-channels-button-section active" : 'explore-channels-button-section' }onClick={handleExplore}>
          <i class="fa-solid fa-building-user"></i>
      Explore channels
    </div>
      </div>
    </>
);
};

export default ActiveWorkspace;
