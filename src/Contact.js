import React from 'react';
import styled from 'styled-components';

const Contact = () => {
    const Container = styled.div`
        text-align: center;
        margin-bottom: 25vh;
    `
    const H1 = styled.h1`
        font-family: 'Nunito',sans-serif;
        font-weight: 600;
        font-size: 35px;
        line-height: 45px;
        width: 69%;
        -webkit-letter-spacing: 1px;
        -moz-letter-spacing: 1px;
        -ms-letter-spacing: 1px;
        letter-spacing: 1px;
        margin: auto;
        margin-top: 99px;
        color: #494c4e;
        margin-bottom: 38px;
    `
    const H3 = styled.h3`
        font-family: 'Nunito',sans-serif;
        font-weight: 100;
        font-size: 24px;
        width: 69%;
        letter-spacing: 1px;
        margin: auto;
        color: #494c4e;
    `
    return (
        <Container>
            <H1>Let's talk</H1>
            <H3>Wanna get in touch or talk about a project? </H3>
            <H3>Email Me at marcusjpeterson5@gmail.com</H3>
            <H3>or message me on <a href="https://www.linkedin.com/in/marcusjpeterson/" style={{color: '#f5c453', textDecoration: 'none'}}>LinkedIn</a></H3>
        </Container>
    );
};

export default Contact;