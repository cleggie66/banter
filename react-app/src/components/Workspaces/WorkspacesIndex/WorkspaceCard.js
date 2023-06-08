import { useHistory } from "react-router-dom";
import "./WorkSpacesIndex.css";
import { useDispatch } from "react-redux";
import { loadActiveWorkspace } from "../../../store/activeWorkspace";
import { useState } from "react";

const WorkspaceCard = ({ workspace }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleCardClick = (e) => {
    e.preventDefault();
    dispatch(loadActiveWorkspace(workspace.id));
    history.push(`/dashboard/${workspace.id}/explore`);
  };
  const [width, setWidth] = useState("")
  const [height, setHeight] = useState("")

  const img = new Image();
  img.onload = function () {
    setWidth(this.width)
    setHeight(this.height)
  }
  img.src = workspace.icon;
  console.log("COMPARE", width, height, width > height)

  return (
    <div className="workspace-card" onClick={handleCardClick}>
      <div className="workspace-card-image-container">
        <img
          src={workspace.icon}
          alt="workspace icon"
          className={`workspace-card-image-${width > height ? "horizontal" : "vertical"}`}
        />
      </div>
      <h2>{`${workspace.name}`}</h2>
    </div>
  );
};
export default WorkspaceCard;
