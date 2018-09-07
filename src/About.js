import React from 'react';
import styled from 'styled-components';

const About = () => {

    const AboutContainer = styled.div`
        width: 63%;
        margin: auto;
        margin-top: 150px;
        margin-bottom: 100px;
    `

    const H3 = styled.h3`
        font-family: 'Nunito',sans-serif;
        font-size: 30px;
        font-weight: 600;
        line-height: 36px;
        color: #494c4e;
    `
    const P = styled.p`
        font-family: "Crimson Text", serif;
        font-size: 16px;
        letter-spacing: 1px;
        line-height: 27px;
        font-weight: 100;
        color: #494c4e;
    `

    return (
        <AboutContainer>
            <div>
                <H3>About:</H3>
                <P>I currently am working as an Instructor at <a href="https://vschool.io/" style={{color: '#f5c453', textDecoration: 'none'}}>V School</a>. See my previous work history on <a href="https://www.linkedin.com/in/marcusjpeterson/" style={{color: '#f5c453', textDecoration: 'none'}}>LinkedIn</a>. Outside of work I am an avid Mountain Biker and Skiier, I also enjoy Golf, Tennis, and pretty much anything outdoors. I am working on a side project Minimalist Journal (a journaling tool to provide quick and easy online journaling in a new and exciting way).</P>
            </div>
        </AboutContainer>
    );
};

export default About;