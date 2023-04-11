import { useHistory } from "react-router-dom";

const ChannelCard = ({ channel, workspaceId }) => {
  const history = useHistory();
  const handleCardClick = (e) => {
    e.preventDefault();
    history.push(`/dashboard/${workspaceId}/${channel.id}`);
  };

  return (
    <div onClick={handleCardClick}>
      <h2>{`# ${channel.name}`}</h2>
    </div>
  );
};
export default ChannelCard;
