import React from 'react';
import ListDevSection from '../components/ListDevSection/ListDevSection';
import HeroSection from '../components/HeroSection/HeroSection';

const Home: React.FC = () => {
  return (
    <React.Fragment>
      <HeroSection title='Título' subTitle='Subtítulo'/>
      <ListDevSection/>
    </React.Fragment>
  );
};

export default Home;
