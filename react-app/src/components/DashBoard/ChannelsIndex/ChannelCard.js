import { useHistory } from "react-router-dom";

const ChannelCard = ({ channel }) => {
  const history = useHistory();
  const handleCardClick = (e) => {
    e.preventDefault();
    history.push(`/channels/${channel.id}`);
  };

  console.log("WHY HELLOOOOOOOOOO")

  return (
    <div onClick={handleCardClick}>
      <h2>{`# ${channel.name}`}</h2>
    </div>
  );
};
export default ChannelCard;
