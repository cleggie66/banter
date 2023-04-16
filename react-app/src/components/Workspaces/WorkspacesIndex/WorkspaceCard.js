import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./WorkSpacesIndex.css";
import { useDispatch } from "react-redux";
import { loadActiveWorkspace } from "../../../store/activeWorkspace";
import LoadingPage from "../../LoadingPage";

const WorkspaceCard = ({ workspace }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const status = "visible";
  const [loadingVisibility, setLoadingVisibility] = useState(status);

  useEffect(() => {
    const loadingPageTimer = setTimeout(() => {
      setLoadingVisibility("hidden");
    }, 3000);
    return () => clearTimeout(loadingPageTimer);
  }, [dispatch]);

  // <LoadingPage visibility={loadingVisibility} />;

  const handleCardClick = (e) => {
    e.preventDefault();
    dispatch(loadActiveWorkspace(workspace.id));
    dispatch(LoadingPage(loadingVisibility));
    history.push(`/dashboard/${workspace.id}`);
  };

  return (
    <div className="workspace-card" onClick={handleCardClick}>
      <img
        src={workspace.icon}
        alt="workspace icon"
        className="workspace-card-image"
      />
      <h2>{`${workspace.name}`}</h2>
    </div>
  );
};
export default WorkspaceCard;
