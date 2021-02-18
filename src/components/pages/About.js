import React from 'react';
import styled from 'styled-components';

import headshot from '../../images/headshot.jpg';
import bayB from '../../images/bayB.jpg';
import wc from '../../images/wc.jpg';




function About() {
    return (
        <AboutContainer>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4 col-md-12">
                        <div className="headshot-image py-4">
                            <img src={headshot} alt="headshot" className="headshot img-fluid" />
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-12 about-title">
                        <h2 className="text-uppercase pt-5">
                            Hey there!
                        </h2>
                        <div className="paragraph py-4 w-75">
                            <p className="para">
                                I'm Joe Idelson, a full stack web developer.   
                            </p>
                            <p className="para">
                                I learned my development skills through Lambda School, a nine month intensive boot-camp style school, where I was taught the most contemporary techniques and skills for web development.
                                Lambda School constantly updates its curriculum based on what tools and techniques are currently being used in the industry.
                                While attending Lambda School I was also able to be a mentor to students in earlier units of the curriculum.    
                            </p>
                            <p className="para">
                            Below you can see my badge of completion for the Lambda School curriculum and some of what it entailed.

                            </p>
                        </div>
                    </div>
                    
                </div>
            </div>


            <div className="text-center">
                <a className="btn button primary-button mr-4 text-uppercase" href="https://drive.google.com/file/d/1urVavN1ztUdGnO6UMR6UIm1xZEU3Yqxl/view?usp=sharing">
                    View my certificate
                </a>
            </div>

            <div className="container-fluid">
                <div className="row">
                   

                    <div className="col-lg-4 col-md-12">
                        <div className="py-4">
                            <img src={bayB} alt="" className="bayB img-fluid" />
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-12 about-title">
                        <div className="paragraph py-4 w-75">
                            <p className="para text-center py-5 mt-5 pl-4 ml-5">
                                I was born in the beautiful city of San Francisco and currently reside in my hometown
                                of Walnut Creek, CA.   
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12">
                        <div className="py-4">
                            <img src={wc} alt="" className="wc img-fluid" />
                        </div>
                    </div>
                    
                </div>
            </div>
  
                
        </AboutContainer>
             
    )
}

export default About;

const AboutContainer = styled.div`

.headshot{
    width: 60%;

}

p.para{
    color: var(--text-color);
    font: normal 500 16px/25px var(--roboto);
}

.button{
    padding: 1.5rem 2.2rem;
    font: normal 500 16px/20px var(--roboto);
    position: relative;
    border: 3px solid transparent;
    border-radius: 4px;
}

.button.primary-button{
    background: var(--gradient-color);
    background-clip: padding-box;
    color: whitesmoke;
    transition: background .6s ease;
    box-shadow: var(--box-shadow);
    border: 2px solid #854fee;
}

.button.primary-button:hover{
    background:whitesmoke;
    background-clip: padding-box;
    color: black;
}

`