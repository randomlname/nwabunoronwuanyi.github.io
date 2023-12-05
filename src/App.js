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
        <div>
          <div className="helloAnimationContainer">
            <HelloAnimation />
          </div>
          <p>I am Nwabunor Onwuanyi</p>
          <p>Full-Stack Developer | AWS Solutions Architect</p>
        </div>

        <div className="buttons">
          <a href="/docs/NwabunorJeffOnwuanyi.pdf" download="NwabunorJeffOnwuanyi.pdf">
            <button><i className="fa fa-download"></i> Resume</button>
          </a>
          <button>Contact</button>
          <button>Links</button>
        </div>
        
        <div className="intro">
          <p>
            I am a University of Lethbridge graduate with a passion for full-stack development with skills in PHP, SQL, React and REST API, 
            with a growing expertise in JavaScript and AWS services. I am enthusiastic about machine learning and statistical analysis, 
            and experienced in diverse programming languages such as Haskell, Verlog and Rust.
          </p>
        </div>

        <div className="Photo-container">
          <img src={profileImage} alt="Profile" className="Photo" />
        </div>

      <div>
        <h3>EXPERIENCED WITH</h3>
          <div className="expriencedWithImages"> 
            <img src={reactImage} className="logo" alt="React" /> 
            <img src={PHPImage} className="logo" alt="PHP" /> 
            <img src={JSImage} className="logo" alt="JS" /> 
            <img src={HTML5Image} className="logo" alt="HTML5" /> 
            <img src={CSSImage} className="logo" alt="CSS" />
          </div>
      </div>

      <div>
        <h3>EXPERIENCE</h3>
        {/* experience 1 */}
          <div className="experience">
            <div className='expTitle'>
              <span className='jobTitle'> Full-Stack Developer</span>
            </div>

            <div className='expHeader'>
              <div className="expRow">
                <div className="expName">
                  <span className='expLeft'>TracxTMS</span>
                  <span className='expLeft location'>Lethbridge Alberta</span>
                </div>
                <div className="expDate">
                  <span className='expRight'>Dec 2022 - Oct 2023</span>
                </div>
              </div>
            </div>

            <div className='expDec'>
              <p className='expPoint'>
                Achieved a 35% improvement in web application performance using Laravel, PHP, and
                SQL, benefiting over 2,000 users and drivers.
              </p>
              <p className='expPoint'>
                Operated within feature and support teams, consistently delivering 5+ product updates
                and user enhancements bi-weekly.
              </p>
              <p className='expPoint'>
                Worked on the design and implementation of 5 major features, further enhancing the
                site based on user feedback and simplifying formerly complex functions. As well as
                construction other features. 
              </p>
              <p className='expPoint'>
                Addressed and resolved user-reported errors and bugs promptly, reinforcing software reliability.
              </p>
              <p className='expPoint'>
                Worked effectively with a team of 10 developers on pressing projects, regularly meeting
                or surpassing deadlines.
              </p>
              <p className='expPoint'>
                Boosted website stability and performance by refactoring code, reducing load times on
                high-demand pages by 20%.
              </p>
            </div>
          </div>
          {/* experience 2 */}
          <div className="experience">
            <div className='expTitle'>
              <span className='jobTitle'>Computer Science Tutor</span>
            </div>

            <div className='expHeader'>
              <div className="expRow">
                <div className="expName">
                  <span className='expLeft'>University Of Lethbridge</span>
                  <span className='expLeft location'>Lethbridge Alberta</span>
                </div>
                <div className="expDate">
                  <span className='expRight'>Sept 2021 - June 2022</span>
                </div>
              </div>
            </div>

            <div className='expDec'>
              <p className='expPoint'>
                Assisted with teaching and guiding students with assignements and projects.
              </p>
            </div>
          </div>
      </div>


        <h3>EDUCATION</h3>
        <h3>PROJECTS</h3>
      </header>
    </div>
  );
}

function createStars() {
  const header = document.querySelector('.App-header');
  const photoContainer = document.querySelector('.Photo-container');

  for (let i = 0; i < 400; i++) {
    const star = document.createElement('div');
    star.className = 'star';

    let x, y;
    do {
      x = Math.random() * 190;
      y = Math.random() * 190;
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
