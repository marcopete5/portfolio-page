import React, {Component} from 'react';
import styled from 'styled-components';

class Project extends Component {
    constructor(){
        super()

        this.state = {
            toggle: true,
            seeProject:{
                letterSpacing: '.5px',
                padding: '21px 31px',
                backgroundColor: '#fdfdfd00',
                borderRadius: '7px',
                fontFamily: '"Nunito",sans-serif',
                fontSize: '13px',
                borderColor: '#f5c453',
                fontWeight: '500',
                fontStyle: 'italic',
                color: 'white',
                position: 'relative',
                top: '40%',
                left: '40%'   
            }
        }
    }
    hover = () => {
        this.setState(prevState => {
            return {
                toggle: !prevState.toggle
            }
        })
    }
    btnOn = () => {
        this.setState(prevState => {
            return {
                ...prevState,
                seeProject: {
                    ...prevState.seeProject,
                    padding: '25px 35px',
                    top: '39%',
                    left: '39%' 
                }
            }
        })
    }
    btnOff = () => {
        this.setState(prevState => {
            return {
                ...prevState,
                seeProject: {
                    ...prevState.seeProject,
                    padding: '21px 31px',
                    top: '40%',
                    left: '40%' 
                }
            }
        })
    }
        
    render(){
        const styles = {
            pic: {
                height: '275px',
                backgroundColor: '#00000012',
                margin: 'auto',
                backgroundImage: `url("${this.props.pic}")`
                
            },
            main: {
                textAlign: 'left',
                fontFamily: "'Libre Franklin', sans-serif",
                width: '650px',
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
            },
            link: {
                textDecoration: 'none',
                color: '#494c4e'
            }
        }
        return (
        <div style={styles.main}>
            <i><h2>{this.props.framework}</h2></i>
            {this.state.toggle ?
            <div style={styles.pic} id="projectPic" onMouseEnter={this.hover}></div>
            :
            <div>
                <div style={styles.pic} id="projectPic" ></div>
                <a href={this.props.link}>
                    <div id="projectPicOverlay" onMouseLeave={this.hover}>
                        <button style={this.state.seeProject} onMouseEnter={this.btnOn} onMouseLeave={this.btnOff}>View Project</button>
                    </div>
                </a>
            </div>
            }
            <h4 style={styles.title}>{this.props.title}</h4>
            <h3 style={styles.description}>{this.props.description}</h3>
        </div>
    )
}
};

export default Project;