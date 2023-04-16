import { useHistory } from "react-router-dom";
import "./WorkSpacesIndex.css";
import { useDispatch } from "react-redux";
import { loadActiveWorkspace } from "../../../store/activeWorkspace";

const WorkspaceCard = ({ workspace }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleCardClick = (e) => {
    e.preventDefault();
    dispatch(loadActiveWorkspace(workspace.id));
    history.push(`/dashboard/${workspace.id}/visible`);
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
