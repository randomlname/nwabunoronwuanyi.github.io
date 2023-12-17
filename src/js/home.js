import React from 'react';
import profileImage from '../images/PorfolioPhoto.jpeg';
import reactImage from '../images/react.png';
import PHPImage from '../images/PHP.png';
import JSImage from '../images/JS.png';
import HTML5Image from '../images/HTML5.png';
import CSSImage from '../images/CSS.png';
import Python from '../images/python.png';
import Flutter from '../images/flutter.png';
import Sql from '../images/mysql.png';
import Aws from '../images/aws.png';
import GitHub from '../images/github.png';
import Linkedin from '../images/linkedin.png';
import Hi from '../animations/Hi';
import '../css/Home.css';

const Home = () => {
  return (
    <div className='container'>
      <div>
        <Hi className="introo"/>
      </div>
      <div className="buttons">
        <a href={`${process.env.PUBLIC_URL}/docs/NwabunorJeffOnwuanyi.pdf`} download="NwabunorJeffOnwuanyi.pdf">
          <button className='download-button'><i className="fa fa-download"></i> Resume</button>
        </a>
        <a href="https://github.com/randomlname" target="_blank" rel="noreferrer">
        <button className='social-button'><img src={GitHub} className="social" alt="React" /></button>
        </a>
        <a href="https://www.linkedin.com/in/nwabunor-onwuanyi/" target="_blank" rel="noreferrer">
        <button className='social-button'><img src={Linkedin} className="social" alt="React" /></button>
        </a>
      </div>
      <div className="intro">
        <p>
          I am a University of Lethbridge graduate with a passion for full-stack development with skills in PHP, SQL, React and REST API, 
          with a growing expertise in JavaScript and AWS services. I am enthusiastic about web development, machine learning and statistical analysis, 
          and experienced in diverse programming languages such as Haskell, Verlog, Flutter and Rust.
        </p>
      </div>

      <div>
        <h3>EXPERIENCED WITH</h3>
          <div className="expriencedWithImages"> 
            <img src={reactImage} className="logo" alt="React" /> 
            <img src={PHPImage} className="logo" alt="PHP" /> 
            <img src={JSImage} className="logo" alt="JS" /> 
            <img src={HTML5Image} className="logo" alt="HTML5" /> 
            <img src={CSSImage} className="logo" alt="CSS" />
            <img src={Python} className="Seclogo" alt="Python" />
            <img src={Flutter} className="Seclogo" alt="Flutter" />
            <img src={Sql} className="Thirdlogo" alt="Sql" />
            <img src={Aws} className="Fourthlogo" alt="Aws" />
          </div>
      </div>

      <div className="Photo-container">
        <img src={profileImage} alt="Profile" className="Photo" />
      </div>
    </div>
  );
}

export default Home;