import React from 'react';
import styled from 'styled-components';

import projectList from './projectList';
import Project from "./Project";

const Projects = () => {
    const H1 = styled.h1`
        font-family: 'Nunito',sans-serif;
        font-weight: 500;
        font-size: 30px;
        line-height: 45px;
        width: 69%;
        letter-spacing: 1px;
        margin: auto;
        margin-top: 99px;
        color: #494c4e;
        margin-bottom: 100px;
    `
    const listedProjects = projectList.map((project, i) => 
            <Project key={project.title + i}
                     title={project.title}
                     pic={project.image}
                     description={project.description} 
                     framework={project.framework}
                     link={project.link}
                    />)
    return (
        <div>
            <H1>Projects I've worked on recently:</H1>
            <hr/>
            {listedProjects}
            <hr/>
            <div id='projectDiv'>
                <h1 style={{fontFamily: '"Nunito", sans-serif', color: "#494c4e"}}>Check out my resume</h1>
                <a href="/resume" style={{textDecoration: 'none'}}><button id='projectBtn'>See Resume</button></a>
            </div>                
            <hr/>
        </div>
    );
};

export default Projects;