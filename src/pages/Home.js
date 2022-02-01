import React, { useState } from 'react';

/*
  Import React Components
*/
import Header from '../components/Header';
import Footer from '../components/Footer';
import Photos from '../components/Photos';


function refreshPage() {
  window.location.reload(false);
}

const Home = () => {

  return (
    <>
      <Header refreshPage={refreshPage}/>
        <main className="home">

        <Photos />        

        </main>
      <Footer />
      
    </>
  );
}

export default Home;