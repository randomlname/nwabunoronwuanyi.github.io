import React from 'react';
import Lottie from 'lottie-react';
import animationData from './Hi.json';
import '../css/Home.css';

function Hi() {  
  return (
    <div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <Lottie animationData={animationData} style={{ width: 100, height: 150, paddingLeft: '10%' }} />
            <p className="fadeInText">I'm Nwabunor Onwuanyi</p>
        </div>
        <div style={{ marginTop: '-15%', display: 'flex', alignItems: 'center'}}>
            <p>Full-Stack Developer | AWS Solutions Architect</p>
        </div>
    </div>
  );
}

export default Hi;
