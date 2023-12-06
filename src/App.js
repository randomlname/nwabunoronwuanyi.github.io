import React from 'react';
import HelloAnimation from './animations/HelloAnimation';
import PlanetAnimation from './animations/planetAnimation';
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
        {/* <nav className="App-nav">
          <a href="#home">Home</a>
          <a href="#posts">Posts</a>
        </nav> */}

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
          <a href="https://github.com/randomlname" target="_blank" rel="noreferrer">
          <button>Github</button>
          </a>
          <a href="https://www.linkedin.com/in/nwabunor-onwuanyi/" target="_blank" rel="noreferrer">
          <button>Linkedin</button>
          </a>
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

        {/* Experience Section start*/}
        <div>
          <h3>EXPERIENCE</h3>
          <div className='container'>
            <div className="experienceContainer">
              <button className="scrollButton left" onClick={() => scroll(-1,'exp')}>&lt;</button>
              <div className="experiences">
                <div className="experience">
                  {/* Role Title, company name, location, date*/}
                  <div className='expTitle'>
                    <span className='jobTitle'> Full-Stack Developer</span>
                  </div>
                  <div className="expRow">
                    <div className="expName">
                      <span className='expLeft'>TracxTMS</span>
                      <span className='expLeft location'>Lethbridge Alberta</span>
                    </div>
                    <div className="expDate">
                      <span className='expRight'>Dec 2022 - Oct 2023</span>
                    </div>
                  </div>
                  {/* short role description */}
                  <div>
                    <p className='shortIntro'> 
                      In my role as a Full-Stack Developer, I was an integral part of both the support and new-feature development teams. 
                      My responsibilities included maintaining and enhancing the website's functionality. This involved troubleshooting and resolving issues, 
                      optimizing performance, and implementing new features. I collaborated closely with cross-functional teams to ensure seamless integration of 
                      front-end and back-end components, while also ensuring that the website remained user-friendly and efficient.  
                    </p>
                  </div>
                  {/* Impact points */}
                  <div>
                    <p className='descriptionArrow description'>
                      Achieved a 35% improvement in web application performance using Laravel, PHP, and
                      SQL, benefiting over 2,000 users and drivers.
                    </p>
                    <p className='descriptionArrow description'>
                      Operated within feature and support teams, consistently delivering 5+ product updates
                      and user enhancements bi-weekly.
                    </p>
                    <p className='descriptionArrow description'>
                      Worked on the design and implementation of 5 major features, further enhancing the
                      site based on user feedback and simplifying formerly complex functions. As well as
                      construction other features. 
                    </p>
                    <p className='descriptionArrow description'>
                      Addressed and resolved user-reported errors and bugs promptly, reinforcing software reliability.
                    </p>
                    <p className='descriptionArrow description'>
                      Worked effectively with a team of 10 developers on pressing projects, regularly meeting
                      or surpassing deadlines.
                    </p>
                    <p className='descriptionArrow description'>
                      Boosted website stability and performance by refactoring code, reducing load times on
                      high-demand pages by 20%.
                    </p>
                  </div>
                </div>
                <div className="experience">
                  {/* Role Title, company name, location, date*/}
                  <div className='expTitle'>
                    <span className='jobTitle'>Computer Science Tutor</span>
                  </div>
                  <div className="expRow">
                    <div className="expName">
                      <span className='expLeft'>University Of Lethbridge</span>
                      <span className='expLeft location'>Lethbridge Alberta</span>
                    </div>
                    <div className="expDate">
                      <span className='expRight'>Sept 2021 - June 2022</span>
                    </div>
                  </div>
                  {/* short role description */}
                  <div>
                    <p className='shortIntro'>
                      Provided support in teaching and mentoring students, helping them with their assignments and projects.  
                    </p>
                  </div>
                  {/* Impact points */}
                </div>
              </div>
              <button className="scrollButton right" onClick={() => scroll(1,'exp')}>&gt;</button>
            </div>
          </div>
        </div>
        {/* Experience Section end*/}
        <div className='helloAnimationContainer'>
          <PlanetAnimation />
        </div>
        {/* Project section start*/}
        <div>
          <h3>PROJECTS</h3>
          <div className='container'>
            <div className="projectsContainer">
            <button className="scrollButton left" onClick={() => scroll(-1, 'proj')}>&lt;</button>
              <div className="projects">
                {/* Project name*/}
                <div className="project">
                  <div className='expTitle'>
                    <span className='jobTitle'>Hospital Database</span>
                  </div>
                  {/*Project Description*/}
                  <p className='description'>
                    Developed a PHP and MySQL-based application for efficiently assigning doctors, nurses, and patients to rooms in healthcare settings, 
                    aiming to streamline the allocation process and improve resource management. The database was designed with tables for rooms, staff, and patients, 
                    incorporating relationships to track assignments, roles, working hours, and wages.
                  </p>
                  {/*Project link*/}
                  <div class="button-container">
                    <a href="https://github.com/randomlname/HospitalDatabase" target="_blank" rel="noreferrer" class="view-project-button">
                      <i class="fas fa-eye"></i> View
                    </a>
                  </div>
                </div>
               {/* Project name*/}
               <div className="project">
                  <div className='expTitle'>
                    <span className='jobTitle'>Card Game</span>
                  </div>
                  {/*Project Description*/}
                  <p className='description'>
                    This application is developed in C++ and utilizes the Model-View-Controller (MVC) 
                    architecture to effectively implement the card game Old Maid. This structure allows for organized code and a clear separation of the game's logic, 
                    user interface, and data management.
                  </p>
                  {/*Project link*/}
                  <div class="button-container">
                    <a href="https://github.com/randomlname/CardGame" target="_blank" rel="noreferrer" class="view-project-button">
                      <i class="fas fa-eye"></i> View
                    </a>
                  </div>
                </div>
                {/* Project name*/}
               <div className="project">
                  <div className='expTitle'>
                    <span className='jobTitle'>Survey form</span>
                  </div>
                  {/*Project Description*/}
                  <p className='description'>
                    This is a basic survey form created using HTML for structure and CSS for styling. 
                    It's a straightforward project that demonstrates the fundamentals of web design, 
                    showcasing how HTML can be used to build the form's layout and CSS to add simple visual enhancements.
                  </p>
                  {/*Project link*/}
                  <div class="button-container">
                    <a href="https://github.com/randomlname/Survey-form" target="_blank" rel="noreferrer" class="view-project-button">
                      <i class="fas fa-eye"></i> View
                    </a>
                  </div>
                </div>
              </div>            
              <button className="scrollButton right" onClick={() => scroll(1, 'proj')}>&gt;</button>
            </div>
          </div>
        </div>
        {/* Project section end*/}
        {/* Education Section start*/}
        <div>
          <h3>EDUCATION/CERTIFICATION</h3>
          <div className="container">
            <div className="educationContainer">
              <div className='educations'>
                <div className='education'>
                  <div className="expRow">
                    <div className="expName">
                      <span className='expLeft'>University  of Lethbridge</span>
                      <span className='expLeft location'>Lethbridge Alberta</span>
                    </div>
                    <div className="expDate">
                      <span className='expRight'>2018 - 2022</span>
                    </div>
                  </div>
                  <div>
                    <p className='description'>
                      Bachelor in Computer Science at the University of Lethbridge
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*Education Section end*/}
      </header>
  </div>
  );
}

function createStars() {
  const header = document.querySelector('.App-header');
  const photoContainer = document.querySelector('.Photo-container');
  const headerHeight = header.offsetHeight;

  for (let i = 0; i < 400; i++) {
    const star = document.createElement('div');
    star.className = 'star';

    let x, y;
    do {
      x = Math.random() * 100;
      y = Math.random() * headerHeight;
    } while (isInExcludedArea(x, y, photoContainer,headerHeight));

    star.style.left = `${x}%`;
    star.style.top = `${y}px`;
    header.appendChild(star);
  }
}

function isInExcludedArea(x, y, element, headerHeight) {
  const rect = element.getBoundingClientRect();
  const leftBound = rect.left / window.innerWidth * 100;
  const rightBound = rect.right / window.innerWidth * 100;
  const topBound = rect.top / headerHeight * 100;
  const bottomBound = rect.bottom / headerHeight * 100;

  return x > leftBound && x < rightBound && y > topBound && y < bottomBound;
}

function scroll(direction, section) {

  let container;
  if (section === 'exp') {
    container = document.querySelector('.experiences');
  } else if (section === 'proj') {
    container = document.querySelector('.projects');
  }

  if (container) {
    const containerWidth = container.clientWidth; 
    container.scrollBy({
      left: direction * containerWidth,
      behavior: 'smooth'
    });
  }
}

window.onload = createStars;

export default App;
