import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { loadActiveChannel } from "../../../store/activeChannel";
import "./Card.css"
import { getChannelByIdThunk } from "../../../store/channel";
import { getAllChannelMessagesThunk } from "../../../store/message";


// todo as url changes messages not associated with url at all  



const ChannelCard = ({ channel }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleCardClick = (e) => {
    e.preventDefault();
    dispatch(getChannelByIdThunk(channel.id))
    dispatch(getAllChannelMessagesThunk(channel.id))
    dispatch(loadActiveChannel(channel.id))
    // instead of this we want to dispatch for current clicked on channel and messages
    history.push(`/dashboard/${channel.workspace_id}/${channel.name}`);
  };

  return (
    <div className="channel-list-item" onClick={handleCardClick}>
      <h2 className="channel-list-names">#</h2>
      <h2 className="channel-list-names">{channel.name}</h2>
    </div>
  );
};
export default ChannelCard;
