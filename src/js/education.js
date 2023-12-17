import React from 'react';
import '../css/Education.css';

const Education = () => {
  return (
    <div className='containeredu'>
        <h3>EDUCATION/CERTIFICATION</h3>
        <div className="edu-container">
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
                            <p className='description'>Bachelor in Computer Science at the University of Lethbridge</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Education;
