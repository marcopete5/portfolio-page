import React from 'react';
import pdf from './images/Marcus_Peterson_Resume.pdf'

const Resume = () => {
    const styles = {
        title: {
            fontFamily: "'Nunito',sans-serif",
            fontWeight: '500',
            fontSize: '30px',
            lineHeight: '45px',
            width: '69%',
            letterSpacing: '1px',
            margin: 'auto',
            marginTop: '99px',
            color: '#494c4e',
            marginBottom: '100px'
        },
        resume: {
            margin: 'auto',
            marginTop: '100px',
            marginBottom: '100px'
        },
        link: {
            textDecoration: 'none',
        }
    }
    return (
        <div>
            <h1 style={styles.title} >My Resume:</h1>
            <hr/>
            <a href={pdf} download><div style={styles.resume} id='resumeImg'></div></a>
            <hr/>
            <div id='projectDiv'>
                <h1 style={{fontFamily: '"Nunito", sans-serif', color: "#494c4e"}}>Want to get in touch?</h1>
                <a href="/contact" style={styles.link}><button id='projectBtn'>Contact me</button></a>
            </div>                
            <hr/>
        </div>
    );
};

export default Resume;