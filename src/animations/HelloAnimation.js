import React from 'react';
import Lottie from 'lottie-react';
import animationData from './Hello.json';

function HelloAnimation() {  
  return <Lottie animationData={animationData} style={{ width: 300, height: 300}} />//loop={false} autoplay={true}/>;
}

export default HelloAnimation;
