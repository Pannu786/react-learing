import { useState } from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';
import Alert from './Alert';

/////

function Todo({ text }) {

/////
  
  const [modalIsOpen, setModalIsOpen] = useState(false);

//////
  
  function deleteHandler() {
    setModalIsOpen(true);
  }
/////
  function closeModalHandler() {
    setModalIsOpen(false);
  }
  
  return (
    <div className='card'>
      <h2>{text}</h2>
      <div className='actions'>
        <button className='btn' onClick={deleteHandler} >
          Delete
        </button>
        {modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler}/>}
        {modalIsOpen && <Backdrop onClick={closeModalHandler} />}
        {modalIsOpen && <Alert />}
      </div>
    </div>
  );
//////
  
}
//////

export default Todo;
