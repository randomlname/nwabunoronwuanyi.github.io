import React from 'react';
import HelloAnimation from './animations/HelloAnimation';
import profileImage from './images/PorfolioPhoto.jpeg';
import reactImage from './images/react.png';
import PHPImage from './images/PHP.png';
import JSImage from './images/JS.png';
import HTML5Image from './images/HTML5.png';
import CSSImage from './images/CSS.png';
import './css/App.css';

function App() {

  return (
    <div className="App" id="home">
        <nav className="App-nav">
          <a href="#home">Home</a>
          <a href="#posts">Posts</a>
        </nav>

      <header className="App-header">
        <HelloAnimation />
        <p>I am Nwabunor Onwuanyi</p>
        <p>Full-Stack Developer | AWS Solutions Architect</p>

        <div className="buttons">
          <a href="/docs/NwabunorJeffOnwuanyi.pdf" download="NwabunorJeffOnwuanyi.pdf">
            <button><i className="fa fa-download"></i> Resume</button>
          </a>
          <button>Contact</button>
          <button>Links</button>
        </div>
        
        <p className="intro">
          I am a University of Lethbridge graduate with a passion for full-stack development with skills in PHP, SQL, React and REST API, 
          with a growing expertise in JavaScript and AWS services. I am enthusiastic about machine learning and statistical analysis, 
          and experienced in diverse programming languages such as Haskell, Verlog and Rust.
        </p>

        <div className="Photo-container">
          <img src={profileImage} alt="Profile" className="Photo" />
        </div>


        <h3>EXPERIENCED WITH</h3>
        <div className="expriencedWithImages"> 
          <img src={reactImage} className="logo" alt="React" /> 
          <img src={PHPImage} className="logo" alt="PHP" /> 
          <img src={JSImage} className="logo" alt="JS" /> 
          <img src={HTML5Image} className="logo" alt="HTML5" /> 
          <img src={CSSImage} className="logo" alt="CSS" />
        </div>

        <h3>EXPERIENCE</h3>
        {/* <div className="workExpContainer">
          <div className="miniContainer">
            <p className='experienceTitle'>
              TracxTMS <br></br>
              <span className="location">Lethbridge Alberta</span>
            </p>
            <p className='experienceDate'>Dec 2020 - Oct 2023</p>
          </div>
        </div> */}
        <h3>EDUCATION</h3>
        <h3>PROJECTS</h3>
      </header>
    </div>
  );
}

function createStars() {
  const header = document.querySelector('.App-header');
  const photoContainer = document.querySelector('.Photo-container');

  for (let i = 0; i < 250; i++) {
    const star = document.createElement('div');
    star.className = 'star';

    let x, y;
    do {
      x = Math.random() * 150;
      y = Math.random() * 150;
    } while (isInExcludedArea(x, y, photoContainer));

    star.style.left = `${x}%`;
    star.style.top = `${y}%`;
    header.appendChild(star);
  }
}

function isInExcludedArea(x, y, element) {
  const rect = element.getBoundingClientRect();
  const leftBound = rect.left / window.innerWidth * 100;
  const rightBound = rect.right / window.innerWidth * 100;
  const topBound = rect.top / window.innerHeight * 100;
  const bottomBound = rect.bottom / window.innerHeight * 100;

  return x > leftBound && x < rightBound && y > topBound && y < bottomBound;
}

window.onload = createStars;

export default App;
