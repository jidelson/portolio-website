import React from 'react';
import cartoon from '../../images/cartoon.png';
import styled from 'styled-components';

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
            </HomeContainer>

    )
}
export default Home;

const HomeContainer = styled.div`

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



`