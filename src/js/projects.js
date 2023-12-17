import React from 'react';
import '../css/Projects.css';

const Projects = () => {
  return (
    <div className='containerporj'>
        <h3>PROJECTS</h3>
        <div className='proj-container'>
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
                        <div className="button-container">
                            <a href="https://github.com/randomlname/HospitalDatabase" target="_blank" rel="noreferrer" className="view-project-button">
                                <i className="fas fa-eye"></i> View
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
                        <div className="button-container">
                            <a href="https://github.com/randomlname/CardGame" target="_blank" rel="noreferrer" className="view-project-button">
                                <i className="fas fa-eye"></i> View
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
                            It's a straightforward project, showcasing how HTML can be used to build the form's layout and CSS to add simple visual enhancements.
                        </p>
                        {/*Project link*/}
                        <div className="button-container">
                            <a href="https://github.com/randomlname/Survey-form" target="_blank" rel="noreferrer" className="view-project-button">
                                <i className="fas fa-eye"></i> View
                            </a>
                        </div>
                    </div>


                </div>            
                <button className="scrollButton right" onClick={() => scroll(1, 'proj')}>&gt;</button>
            </div>
        </div>
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

export default Projects;