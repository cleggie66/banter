import EditMessageModal from "../EditMessageModal";
import OpenModalButton from "../../OpenModalButton";
import { useDispatch } from "react-redux";
import { getAllChannelMessagesThunk } from "../../../store/message";
import { faTrash, faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useState, useRef, useEffect } from "react";
import { useModal } from "../../../context/Modal";

const MessageCard = ({
  message,
  sessionUser,
  activeChannel,
  socket,
  handleDeleteMessage,
  handleEdit,
}) => {
  const dispatch = useDispatch();
  if (!message.message_owner) {
    dispatch(getAllChannelMessagesThunk(activeChannel.id));
  }

  const {setModalContent} = useModal()
  const [showMenu, setShowMenu] = useState(false);
  const ulRef = useRef();
  const history = useHistory();

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };


  const openEdit = () => {
    setModalContent(<EditMessageModal
      message={message}
      activeChannelId={activeChannel.id}
      handleEdit={handleEdit}
      socket={socket}
    />)
    closeMenu()
  }




  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = (e) => {
      if (!ulRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);


  const ulClassName = "message-dropdown" + (showMenu ? "" : " hidden");
  const closeMenu = () => setShowMenu(false);

  return (
    <div>
      
      <div style={{position:'relative'}} key={message.id} className={showMenu ? 'message active': 'message'}>
        <div className={ulClassName} ref={ulRef}>
          <div onClick={openEdit} id="message-update-wrap-1" style={{ borderBottom: '1px solid #DCDCDC' }}>
            <div className="message-edit-menu-items">Edit message</div>
          </div>
          <div id="message-update-wrap-2">
            <div onClick={(e) => handleDeleteMessage(e, message)} className="message-edit-menu-items">Delete message</div>
          </div>
        </div>
    
        <div className="message-content">
          <div className="image-container">
            <img
              src={
                message.message_owner.profile_picture === null
                  ? message.message_owner.name[0]
                  : message.message_owner.profile_picture
              }
              alt="profile"
              className="message-profile-pic"
            />
          </div>
          <div className="message-details">
            <h4 className="message-sender-first-name">
              {message.message_owner.first_name}
            </h4>
            <p>{message.content}</p>
          </div>
        </div>
        {(sessionUser.id === message.message_owner.id ||
          sessionUser.id === message.user_id) && (

          <div className="message-buttons">
        
            <button onClick={openMenu}><i class="fa-solid fa-ellipsis"></i></button>
            {/* <OpenModalButton
              buttonText="Edit"
              modalComponent={
                <EditMessageModal
                  message={message}
                  activeChannelId={activeChannel.id}
                  handleEdit={handleEdit}
                  socket={socket}
                />
              }
            /> */}

            
            {/* <button onClick={(e) => handleDeleteMessage(e, message)}>
              Delete
            </button> */}
          </div>
        )}
      </div>
    </div>
  );
};
export default MessageCard;
