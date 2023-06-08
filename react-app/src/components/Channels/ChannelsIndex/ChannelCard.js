import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { loadActiveChannel } from "../../../store/activeChannel";
import "./Card.css";
import { getChannelByIdThunk } from "../../../store/channel";
import {
  clearMessage,
  getAllChannelMessagesThunk,
} from "../../../store/message";

const ChannelCard = ({ channel, activeChannel, workspaceId }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  let isActive = "";
  if (channel.id === activeChannel.id) {
    isActive = "channel-active";
  }

  const handleCardClick = (e) => {
    e.preventDefault();
    dispatch(getChannelByIdThunk(channel.id));
    dispatch(clearMessage);
    dispatch(getAllChannelMessagesThunk(channel.id));
    dispatch(loadActiveChannel(channel.id));
    history.push(`/dashboard/${workspaceId}/${channel.name}`);
  };

  return (
    <div className={`channel-list-item ${isActive}`} onClick={handleCardClick}>
      <h2 className="channel-list-names-icon">#</h2>
      <h2 className="channel-list-names">{channel.name}</h2>
    </div>
  );
};
export default ChannelCard;
