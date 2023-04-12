import React from 'react';
import { useModal } from '../../context/Modal';

function OpenModalButton({
  modalComponent, // component to render inside the modal
  buttonText, // text of the button that opens the modal
  onButtonClick, // optional: callback function that will be called once the button that opens the modal is clicked
  onModalClose // optional: callback function that will be called once the modal is closed
}) {
  const { setModalContent, setOnModalClose } = useModal();

  const onClick = () => {
    if (onModalClose) setOnModalClose(onModalClose);
    setModalContent(modalComponent);
    if (onButtonClick) onButtonClick();
  };

  return (
    <>
    {buttonText === 'Channels' &&(<button className='channels-button-modal'onClick={onClick}>{buttonText}</button>)}
    {buttonText === 'SIGN IN' &&(<button className='log-in-button'onClick={onClick}>{buttonText}</button>)}
    {buttonText === 'TRY FOR FREE' &&(<button className='sign-up-button'onClick={onClick}>{buttonText}</button>)}
    {buttonText === 'delete' &&(<button className='delete-channel-button'onClick={onClick}>{buttonText}</button>)}
    {buttonText === 'userIcon' &&(<button className='user-icon-button'onClick={onClick}>{buttonText}</button>)}
    {buttonText === 'edit' &&(<button className='user-icon-button'onClick={onClick}>{buttonText}</button>)}




    {/* <button onClick={onClick}>{buttonText}</button> */}
    
    </>
  );
}

export default OpenModalButton;
