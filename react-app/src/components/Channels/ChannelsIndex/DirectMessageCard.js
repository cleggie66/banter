import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { loadActiveChannel } from "../../../store/activeChannel";
import "./Card.css";
import { loadActiveWorkspace } from "../../../store/activeWorkspace";
import { getAllChannelMessagesThunk } from "../../../store/message";

const DirectMessageCard = ({ channel, sessionUser, workspaceId }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const handleCardClick = (e) => {
    e.preventDefault();
    dispatch(getAllChannelMessagesThunk(channel.id));
    dispatch(loadActiveChannel(channel.id));
    dispatch(loadActiveWorkspace(workspaceId));
    history.push(`/dashboard/${workspaceId}/${channel.id}`);
  };

  const filteredUsersArray = [];

  const filteredUsers = channel.users_in_channels.filter(
    (user) => user.id !== sessionUser.id
  );

  filteredUsers.forEach((user) => {
    filteredUsersArray.push(`${user.first_name} ${user.last_name}`);
  });

  let title = filteredUsersArray.join(", ");

  if (filteredUsersArray.length === 0) return null;

  const dmPictureRender = () => {
    if (filteredUsers.length > 1) {
      return (
        <h4 className="group-dm-profile-picture">{filteredUsers.length}</h4>
      );
    } else {
      return (
        <img
          src={filteredUsers[0].profile_picture}
          alt="profile"
          className="message-profile-pic"
        />
      );
    }
  };

  return (
    <div className="channel-list-item" onClick={handleCardClick}>
      <div className="dm-image-container">{dmPictureRender()}</div>
      <h2 className="channel-list-names">{title}</h2>
    </div>
  );
};
export default DirectMessageCard;
