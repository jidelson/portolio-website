import React from 'react';
import styled from 'styled-components';

import cartoon from '../../images/cartoon.png';
import about from '../../images/about.png';

import html from '../../images/html.png';
import css from '../../images/css.png';
import javascript from '../../images/javascript.png';
import react from '../../images/react.png';
import python from '../../images/python.png';
import redux from '../../images/redux.png';
import node from '../../images/node.png';
import express from '../../images/express.png';
import sql from '../../images/sql.png';

import vbb from '../../images/vbb.png';
import cookbook from '../../images/cookbook.jpg';
import cookbook2 from '../../images/cookbook2.png';


function Home() {
    return (

        <HomeContainer className="main-home">
            <div className="home-top py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 site-title">
                            <h3 className="intro">Hey there! I am</h3>
                            <h1 className="name text-uppercase">Joe Idelson</h1>
                            <h4 className="jobTitle text-uppercase">Full Stack Web Developer</h4>
                            <div className="site-buttons">
                                <div className="d-flex flex-row">
                                    <button type="button" className="btn button primary-button mr-4 text-uppercase">Hire Me</button>
                                    <button type="button" className="btn button secondary-button text-uppercase">My Resume</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 banner-image">
                            <img src={cartoon} alt="cartoon-img" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>







            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4 col-md-12">
                        <div className="about-image">
                            <img src={about} alt="About me" className="img-fluid" />
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-12 about-title">
                        <h2 className="text-uppercase pt-5">
                            Let me introduce myself
                        </h2>
                    <div className="paragraph py-4 w-75">
                        <p className="para">
                            Hey there! I'm Joe Idelson, a full stack web developer.
                            I live in the San Francisco Bay Area. Prior to coding, I recieved my Bachelor's in Applied Science for Animation and Visual Effects. I am hard working and passionate about my work. I am always looking for ways to improve.
                        </p>
                        <p className="para">
                            I graduated from Lambda School, a nine month intensive boot-camp style school, where I was taught the most contemporary techniques and skills for web development. When I am not coding, I enjoy spending time with family and friends, and working on a variety of art projects.                            </p>
                    </div>
                        <button type="button" className="btn button primary-button text-uppercase"> Download Resume</button>
                    </div>
                </div>
            </div>







            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center skills-title">
                        <h1 className="text-uppercase title-text">Skills</h1>
                        <p className="para">
                            Dummy text  Dummy text  Dummy text  Dummy text  Dummy text  Dummy text 
                            Dummy text  Dummy text  Dummy text  Dummy text  Dummy text  Dummy text 
                        </p> 
                    </div>
                </div>
            
                <div className="container skills-list">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="skills">
                                <div className="skills-img text-center-py-4">
                                    <img src={html} alt="Skills-1" className="rounded mx-auto d-block img-fluid" />
                                </div>
                                <div className="card-body text-center">
                                    <h4 className="card-title text-uppercase font-roboto">HTML</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="skills">
                                <div className="skills-img text-center-py-4">
                                    <img src={css} alt="Skills-2" className="rounded mx-auto d-block img-fluid" />
                                </div>
                                <div className="card-body text-center">
                                    <h4 className="card-title text-uppercase font-roboto">CSS</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="skills">
                                <div className="skills-img text-center-py-4">
                                    <img src={javascript} alt="Skills-3" className="rounded mx-auto d-block img-fluid" />
                                </div>
                                <div className="card-body text-center">
                                    <h5 className="card-title text-uppercase font-roboto">Javascript</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="skills">
                                <div className="skills-img text-center-py-4">
                                    <img src={react} alt="Skills-4" className="img-fluid rounded mx-auto d-block" />
                                </div>
                                <div className="card-body text-center">
                                    <h5 className="card-title text-uppercase font-roboto">React</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="skills">
                                <div className="skills-img text-center-py-4">
                                    <img src={python} alt="Skills-5" className="rounded mx-auto d-block img-fluid" />
                                </div>
                                <div className="card-body text-center">
                                    <h4 className="card-title text-uppercase font-roboto">Python</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="skills">
                                <div className="skills-img text-center-py-4">
                                    <img src={redux} alt="Skills-6" className="rounded mx-auto d-block img-fluid" />
                                </div>
                                <div className="card-body text-center">
                                    <h4 className="card-title text-uppercase font-roboto">Redux</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="skills">
                                <div className="skills-img text-center-py-4">
                                    <img src={node} alt="Skills-7" className="rounded mx-auto d-block img-fluid" />
                                </div>
                                <div className="card-body text-center">
                                    <h4 className="card-title text-uppercase font-roboto">Node</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="skills">
                                <div className="skills-img text-center-py-4">
                                    <img src={express} alt="Skills-8" className="rounded mx-auto d-block img-fluid" />
                                </div>
                                <div className="card-body text-center">
                                    <h4 className="card-title text-uppercase font-roboto">Express</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="skills">
                                <div className="skills-img text-center-py-4">
                                    <img src={sql} alt="Skills-1" className="rounded mx-auto d-block img-fluid" />
                                </div>
                                <div className="card-body text-center">
                                    <h4 className="card-title text-uppercase font-roboto">SQLite Studio</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>







            

            <div className="container">
                <div className="project-title pb-5">
                    <h1 className="text-uppercase title-h1 text-center">Projects</h1>
                </div>

                    {/* <div className="button-group text-center">
                        <button type="button" className="active" id="btn1" data-filter="*">All</button>
                        <button type="button" data-filter=".front-end">Front End</button>
                        <button type="button" data-filter=".back-end">Back End</button>
                        <button type="button" data-filter=".latest">Latest</button>
                        <button type="button" data-filter=".upcoming">Updating</button>
                    </div> */}

                <div className="row grid">
                    <div className="col-lg-4 col-md-6 col-sm-12 element-item latest front-end py-4">
                        <div className="our-project">
                            <div className="img">
                                <img src={vbb} alt="portfolio-1" />
                            </div>
                            <div className="title py-4 text-center">
                                <h4 className="text-uppercase">Village Book Builder</h4>
                                <span className="text-secondary">Front End Developer</span>
                            </div>
                            <div className="text-center"> 
                                <a href="https://github.com/Lambda-School-Labs/village-book-builders-fe-b" className="btn btn-info" role="button">View</a>  
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 element-item back-end">
                        <div className="our-project">
                            <div className="img">
                                <img src={cookbook} alt="portfolio-2" />
                            </div>
                            <div className="title py-4 text-center">
                                <h4 className="text-uppercase">Secret Family Recipes</h4>
                                <span className="text-secondary">Back End Developer</span>
                                <div className="text-center">
                                    <a href="https://github.com/bw-secret-family-recipes-4/Backend" className="btn btn-info" role="button">View</a>  
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 element-item front-end">
                        <div className="our-project">
                            <div className="img">
                                <img src={cookbook2} alt="portfolio-3" />
                            </div>
                            <div className="title py-4 text-center">
                                <h4 className="text-uppercase">Secret Family Recipes</h4>
                                <span className="text-secondary">Front End Developer</span>
                                <div className="text-center">
                                    <a href="https://github.com/secret-family-recipes-bwft/front-end" className="btn btn-info" role="button">View</a>                         
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>





		
                
            </HomeContainer>

    )
}
export default Home;

const HomeContainer = styled.div`

p.para{
    color: var(--text-color);
    font: normal 500 16px/25px var(--roboto);
}

.intro{
    padding-top: 15%;
    font: normal bold 50px/72px var(--roboto);
    font-weight: 500;
}

.name{
    font: normal bold 50px/72px var(--roboto);
    font-size: 5.5rem;
}

.title-text{
    font: normal bold 50px/72px var(--roboto);
}
.jobTitle{
    font: normal bold 50px/72px var(--roboto);
    font-size: 1.5rem;
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
}

.button.primary-button:hover{
    background:whitesmoke;
    background-clip: padding-box;
    color: black;
}

.button.primary-button::after, .button-secondary-button::after{
    position: absolute;
    top: -2px; left: -2px;
    bottom: -2px; right: -2px;
    background: var(--gradient-color);
    content: '';
    z-index: -1;
    border-radius: 4px;
}

.button.secondary-button{
    background: white;
    background-clip: padding-box;
    transition: background .6s ease;
    border: 2px solid #854fee;
}

.button.secondary-button:hover{
    background: var(--gradient-color);
    color: whitesmoke;
    box-shadow: var(--box-shadow);
}

.skills-title{
    padding: 0 14rem;
}

.skills-title h1{
    font-size: 35px;
}

.skills{
    background: rgba(248, 252, 253, 0.973);
    /* background: red; */
    padding: 2rem 0;
    width: 16rem;
    margin: .5rem .5rem;
    transition: box-shadow .7s ease;
}

.skills:hover{
    box-shadow: var(--box-shadow);
}

.button-group button{
    background: transparent;
    border: none;
    font: normal 500 16px/130px var(--roboto);
    text-transform: uppercase;
}

.button-group button + button{
    padding-left: 3rem;
}

.grid .our-project > .title h4{
    font: normal 700 25px/12px var(--roboto);
}

.grid .our-project .img:hover{
    filter: brightness(1.1) drop-shadow(1px 8px 30px #b1afaf);
}




`