import React from 'react';
import styled from 'styled-components';


import About from './About';


const Home = () => {
    const Intro = styled.div`
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
    const Pics = styled.div`    
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        width: 90%;
        margin: auto;
    `
    const ImgDiv = styled.div`
        height: 350px;
        background-size: cover;
        width: 91%;
        box-shadow: 2px 2px 1px #333;
    `


    return (
        <div>
            <Intro>Hello, my name is Marcus. I am a Full Stack Web Developer living in Draper, UT.</Intro>
            <Pics>
                <ImgDiv id='img1'></ImgDiv>
                <ImgDiv id='img2'></ImgDiv>
                <ImgDiv id='img3'></ImgDiv>
            </Pics> 
            <About /> 
            <hr/>
            <div id='projectDiv'>
                <h1 style={{fontFamily: '"Nunito", sans-serif', color: "#494c4e"}}>Check out my work</h1>
                <a href="/projects" style={{textDecoration: 'none'}}><button id='projectBtn'>See Projects</button></a>
            </div>                
            <hr/>
       </div>
    );
};

export default Home;