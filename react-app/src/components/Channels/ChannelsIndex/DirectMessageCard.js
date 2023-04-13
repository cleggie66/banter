import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { loadActiveChannelThunk } from "../../../store/activeChannel";
import "./Card.css"

const DirectMessageCard = ({ channel, sessionUser }) => {
    const history = useHistory();
    const dispatch = useDispatch();

    const handleCardClick = (e) => {
        console.log(filteredUsers)
        e.preventDefault();
        dispatch(loadActiveChannelThunk(channel.id))
        history.push(`/dashboard/${channel.workspace_id}/${channel.id}`);
    };

    const filteredUsersArray = []

    const filteredUsers = channel.users_in_channels.filter((user) => user.id !== sessionUser.id)

    filteredUsers.forEach((user) => {
        filteredUsersArray.push(`${user.first_name} ${user.last_name}`)
    })

    let title = filteredUsersArray.join(", ")

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
        <div className="channel-list-item" onClick={handleCardClick}>
            <div className='dm-image-container'>
                {dmPictureRender()}
            </div>
            <h2>{title}</h2>
        </div>
    );
};
export default DirectMessageCard;
