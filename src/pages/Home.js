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
  
    /*
      [Header Trigger] state render to Photos Component 
    */
    const [column, setColumn] = useState(3)

    /* 
      [Header] function to change outline of column in Photos Component 
    */
    function changeLayout() {
      // console.log('click')
      column == 3 ? setColumn(4) : setColumn(3)
    }
    
  return (
    <>
      <Header refreshPage={refreshPage} changeLayout={changeLayout}/>
      <main className="home">

      <Photos column={column}/>        

      </main>
      <Footer />
    </>
  );
}

export default Home;