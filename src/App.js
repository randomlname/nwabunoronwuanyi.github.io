import React, { useState, useEffect, useRef }  from 'react';
import Home from './js/home';
import Experience from './js/experience';
import Education from './js/education';
import Video from './js/video'
import './css/App.css';

function App() {
  /*test*/
  return (
    <div className="app-container">
      <Video />
      <div className="section" id="Home">
        <Home />
      </div>
      <div className="section" id="Experience">
        <Experience />
      </div>
      <div className="section" id="Education">
        <Education />
      </div>
    </div>
  );
}

export default App;
