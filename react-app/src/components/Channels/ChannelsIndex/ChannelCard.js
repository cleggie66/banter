import { useHistory } from "react-router-dom";

const ChannelCard = ({ channel }) => {
  const history = useHistory();
  const handleCardClick = (e) => {
    e.preventDefault();
    history.push(`/dashboard/${channel.workspace_id}/${channel.id}`);
  };

  return (
    <div onClick={handleCardClick}>
      <h2>{`# ${channel.name}`}</h2>
    </div>
  );
};
export default ChannelCard;
