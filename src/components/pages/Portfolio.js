import React from 'react';
import vbb from '../../images/vbb.png';
import cookbook from '../../images/cookbook.jpg';
import cookbook2 from '../../images/cookbook2.png';
import styled from 'styled-components';

function Portfolio() {
    return (
        <PortfolioContainer className="container">
            <div className="project-title pb-5">
                <h1 className="text-uppercase title-h1 text-center">Projects</h1>
            </div>
            <div className="text-center">
                <h5>Check out my <a href="https://www.github.com/jidelson">github</a> to see my most recent work!</h5>
            </div>


            <div className="projectRow row grid">
                <div className="col-lg-4 col-md-6 col-sm-12  py-4">
                    <div className="our-project">
                        <div className="img">
                            <img src={vbb} alt="portfolio-1" className="projectOne" />
                        </div>
                        <div className="title py-4 text-center">
                            <h4 className="text-uppercase">Village Book Builder</h4>
                            <span className="text-secondary">Front End Developer</span>
                        </div>
                        <div className="text-center"> 
                            <a href="https://github.com/Lambda-School-Labs/village-book-builders-fe-b" className="btn button primary-button mr-4 text-uppercase" role="button">View</a>  
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 py-4">
                    <div className="our-project">
                        <div className="img">
                            <img src={cookbook} alt="portfolio-2" className="projectTwo" />
                        </div>
                        <div className="title py-4 text-center">
                            <h4 className="text-uppercase">Secret Family Recipes</h4>
                            <span className="text-secondary">Back End Developer</span>
                            <div className="text-center py-4">
                                <a href="https://github.com/bw-secret-family-recipes-4/Backend" className="btn button primary-button mr-4 text-uppercase" role="button">View</a>  
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 py-4">
                    <div className="our-project">
                        <div className="img">
                            <img src={cookbook2} alt="portfolio-3" className="projectThree" />
                        </div>
                        <div className="title py-4 text-center">
                            <h4 className="text-uppercase">Secret Family Recipes</h4>
                            <span className="text-secondary">Front End Developer</span>
                            <div className="text-center py-4">
                                <a href="https://github.com/secret-family-recipes-bwft/front-end" className="btn button primary-button mr-4 text-uppercase" role="button">View</a>                         
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PortfolioContainer>
    )
}

export default Portfolio;

const PortfolioContainer = styled.div`
.grid .our-project > .title h4{
    font: normal 700 25px/12px var(--roboto);
}

.grid .our-project .img:hover{
    filter: brightness(1.1) drop-shadow(1px 8px 30px #b1afaf);
}

.button{
    padding: 1rem 1.5rem;
    font: normal 500 16px/20px var(--roboto);
    position: relative;
    border: 2px solid #854fee;
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
`