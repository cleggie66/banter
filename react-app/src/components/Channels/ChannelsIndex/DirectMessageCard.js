import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { loadActiveChannel } from "../../../store/activeChannel";
import "./Card.css"
import { loadActiveWorkspace } from "../../../store/activeWorkspace";

const DirectMessageCard = ({ channel, activeChannel, sessionUser, workspaceId }) => {
    const history = useHistory();
    const dispatch = useDispatch();
    let isActive = ""
    if (channel.id === activeChannel.id) {
        isActive = 'channel-active'
    }

    const handleCardClick = (e) => {
        e.preventDefault();
        dispatch(loadActiveChannel(channel.id))
        dispatch(loadActiveWorkspace(workspaceId))
        history.push(`/dashboard/${workspaceId}/${channel.id}`);
    };

    const filteredUsersArray = []

    const filteredUsers = channel.users_in_channels.filter((user) => user.id !== sessionUser.id)

    filteredUsers.forEach((user) => {
        filteredUsersArray.push(`${user.first_name} ${user.last_name}`)
    })

    let title = filteredUsersArray.join(", ")

    if (filteredUsersArray.length === 0) return null

    const dmPictureRender = () => {
        if (filteredUsers.length > 1) {
            return (
                <h4 className="group-dm-profile-picture">{filteredUsers.length}</h4>
            )
        } else {
            return (
                <img
                    src={filteredUsers[0].profile_picture}
                    alt="profile"
                    className="message-profile-pic"
                />
            )
        }
    }


    return (
        <div className={`channel-list-item ${isActive}`} onClick={handleCardClick}>
            <div className='dm-image-container'>
                {dmPictureRender()}
            </div>
            <h2 className="channel-list-names">{title}</h2>
        </div>
    );
};
export default DirectMessageCard;
