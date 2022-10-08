import React, { useState } from 'react';
import 'antd/dist/antd.css';
import './modalWindow.css';
import { Button, Modal } from 'antd';
import man from './man.png';


const ModalWindow: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('Content of the modal');

  const showModal = () => {
    setOpen(true);
  };


  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal with async logic
      </Button>
      <Modal
      
        open={open}
        onCancel={handleCancel}
        footer={
          <>
            <div className='footerText'>
              <p>Неправильно введён логин или пароль.</p>
              <p>Попробуйте еще раз.</p>
            </div>
          </>
        }
      >
        <div className='img'><img src={man} alt="img of peoples" /></div>
         
      </Modal>
    </>
  );
};

export default ModalWindow;