import React from 'react';
import Predictions from '../components/Predictions/Predictions';
import Team from '../components/team/Team';
import Footer from '../components/layout/Footer';

const Home = () => {
  return (
    <div>
      <Predictions />
      <Team />
      <Footer />
    </div>
  );
};

export default Home;