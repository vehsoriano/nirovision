import React, {} from 'react';

import Header from '../components/Header'
import Footer from '../components/Footer';
import { SRLWrapper } from "simple-react-lightbox";

const About = () => {    

  return (
    <>
      <Header />
      <main className="about">
        <SRLWrapper>
        <div>
        <img src="https://media.istockphoto.com/photos/beachside-pathway-leading-to-the-ocean-with-spectacular-sunrise-picture-id1283886803?b=1&k=20&m=1283886803&s=170667a&w=0&h=0bLBQjATGS62GE2GnQzu-eipxEM-oh7qOAACZUKZ5bY=" alt="Umbrella" />
        </div>
        <div>
        <img src="https://media.istockphoto.com/photos/beachside-pathway-leading-to-the-ocean-with-spectacular-sunrise-picture-id1283886803?b=1&k=20&m=1283886803&s=170667a&w=0&h=0bLBQjATGS62GE2GnQzu-eipxEM-oh7qOAACZUKZ5bY=" alt="Umbrella" />
        </div>
        </SRLWrapper>
      </main>
      <Footer />
    </>
  );
}

export default About;
