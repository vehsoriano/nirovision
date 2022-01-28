import React, { useState } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Photos from '../components/Photos';


import {
  Modal,
  Col,
  Button
} from 'react-bootstrap'


const Home = () => {
  
  const [show, setShow] = useState(false);
  const [modalData, setModalData] = useState({})
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleClose = () => setShow(false);

  function handleOpenMenu(i) {
    show ? setShow(false) : setShow(true)
    if (i) {
      setModalData(i)
      setIsModalOpen(true)
    }
    console.log(i)
  }

  return (
    <>
      <Header />
        <main className="home">

        <Photos triggerModal={(i) => handleOpenMenu(i)}/>

        </main>
      <Footer />
      {
        isModalOpen ?
        <Modal show={show} onHide={handleClose}>
          <Modal.Body>
            <div className="holder-img">
              <img src={modalData.urls.small} alt={ modalData.description}/>
            </div>
            <div className="holder-description">
              <p className="description">{modalData.description ? modalData.description : 'User did not specify the iamge description'}</p>
              <p className="user">@{modalData.user.name}</p>
            </div>
          </Modal.Body>
        </Modal> : ''
      }
      
    </>
  );
}

export default Home;