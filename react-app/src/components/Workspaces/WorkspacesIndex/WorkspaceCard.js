import { useHistory } from "react-router-dom";
import './WorkSpacesIndex.css'

const WorkspaceCard = ({ workspace }) => {
  const history = useHistory();
  const handleCardClick = (e) => {
    e.preventDefault();
    history.push(`/dashboard/${workspace.id}`);
  };

  return (
    <div className='workspace-card'onClick={handleCardClick}>
      <img src={workspace.icon} alt="workspace icon" className="workspace-card-image"/>
      <h2>{`${workspace.name}`}</h2>
    </div>
  );
};
export default WorkspaceCard;
