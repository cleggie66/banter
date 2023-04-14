import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { loadActiveChannelThunk } from "../../../store/activeChannel";
import "./Card.css"

const ChannelCard = ({ channel }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleCardClick = (e) => {
    e.preventDefault();
    dispatch(loadActiveChannelThunk(channel.id))
    history.push(`/dashboard/${channel.workspace_id}/${channel.id}`);
  };

  return (
    <div className="channel-list-item" onClick={handleCardClick}>
      <h2 className="channel-list-names">#</h2>
      <h2 className="channel-list-names">{channel.name}</h2>
    </div>
  );
};
export default ChannelCard;
