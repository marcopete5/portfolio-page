import React from 'react';
import styled from 'styled-components';

const Project = () => {
    const styles = {
        pic: {
            height: '275px',
            backgroundColor: '#00000012',
            margin: 'auto'
        },
        main: {
            textAlign: 'left',
            fontFamily: "'Libre Franklin', sans-serif",
            width: '47%',
            margin: 'auto',
            padding: '38px',
        },
        title: {
            fontSize: '12px',
            fontWeight: '600',
            color: '#f5c453'
        },
        description: {
            fontSize: '15px'
        }
    }
    return (
        <div style={styles.main}>
            <div style={styles.pic}></div>
            <h4 style={styles.title}>FULL STACK API PROJECT</h4>
            <h3 style={styles.description}>Description</h3>
        </div>
    );
};

export default Project;