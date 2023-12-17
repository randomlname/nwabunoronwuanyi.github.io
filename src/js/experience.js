import React from 'react';
import '../css/Experience.css';
import Project from './projects';

const Experience = () => {
  return (
    <div className='containerexp'>
        <h3>EXPERIENCE</h3>
        <div className='exp-container'>
            <div className="experienceContainer">
                <button className="scrollButton left" onClick={() => scroll(-1,'exp')}>&lt;</button>
                    <div className="experiences">

                        {/* Role Title, company name, location, date*
                        <div className="experience">
                            <div className='expTitle'>
                                <span className='jobTitle'>Principal developer / Senior Developer</span>
                            </div>
                            <div className="expRow">
                                <div className="expName">
                                    <span className='expLeft'>Petrepreneur</span>
                                    <span className='expLeft location'>Toronto Ontario</span>
                                </div>
                                <div className="expDate">
                                    <span className='expRight'>Nov 2023 - Present</span>
                                </div>
                            </div>
                            {/* short role description *
                            <div>
                                <p className='shortIntro'>
                                    In this role, I assisted in developing both the application base module and the website base module, while providing continuous updates and adding new features.
                                </p>
                            </div>
                        </div>
                        {/* Impact points */}


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
                                and surpassing deadlines.
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
        <Project />
    </div>
  );
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

export default Experience;