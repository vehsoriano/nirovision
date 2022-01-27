import React, { useState } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Photos from '../components/Photos';


// import {
//   Row,
//   Col,
//   Button
// } from 'react-bootstrap'


const Home = () => {    

  return (
    <main className="home">

      {/* Header component */}
      <Header />

      <Photos />

      <Footer />
    </main>
  );
}

export default Home;