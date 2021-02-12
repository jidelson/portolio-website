import React from 'react';
import styled from 'styled-components';

function Footer() {
    return (
        <FooterContainer className="main-footer">
            <div className="footer-middle">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <ul className="list-inline">
                                <li className="list-inline-item"><a href="/">Home</a></li>
                                <li className="list-inline-item"><a href="/about">About Me</a></li>
                                <li className="list-inline-item"><a href="/portfolio">Portfolio</a></li>
                                <li className="list-inline-item"><a href="/resume">Resume</a></li>
                                <li className="list-inline-item"><a href="/contact">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p className="text-center">
                            &copy;{new Date().getFullYear()} Joe Idelson - All Rights Reserved
                        </p>
                    </div>
                </div>
            </div>
        </FooterContainer>
    )
}
export default Footer;

const FooterContainer = styled.footer`
.footer-middle{
    background: var(--mainDark);
    padding-top: 3rem;
    color: var(--mainWhite);
    text-align: center;
}
.footer-bottom{
    padding-top: 3rem;
    padding-bottom: 2rem;
}
ul li a{
    color: var(--mainGrey);
}
ul li a:hover{
    color:var(--mainLightGrey)
}
`;