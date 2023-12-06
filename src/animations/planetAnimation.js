import React from 'react';
import Lottie from 'lottie-react';
import animationData from './planet.json';

function PlanetAnimation() {  
  return <Lottie animationData={animationData} style={{ width: 300, height: 90 }} />;
}

export default PlanetAnimation;
