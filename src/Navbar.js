import React, {Component} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

let turn = 0;

class Navbar extends Component{
    constructor(){
        super()

        this.state = {
            deg: 0
        }
    }

    rotate = () => {
        this.setState(prevState => {
            return{
                deg: prevState.deg === 0 ? 180 : 0
            }
        })
    }

    render(){
        const Nav = styled.nav`
            display: grid;
            grid-template-columns: 2fr 1fr;
            padding: 30px;
            position: relative;
            top: 19px;
            left: 44px;
        `
    

        const Links = styled.ul`
            display: flex;
            justify-content: space-evenly;
            position: relative;
            bottom: -15px;
        `
        const Li = styled(Link)`
            text-decoration: none;
            list-style-type: none;
            color: #494c4e;
            font-family: 'Nunito',sans-serif;
            font-weight: 600;
            font-size: 15px;
        `
        
        return (
            <Nav>
                <div>
                    <div id='rotateMe' style={{ transform: `rotate(${this.state.deg}deg)` }} onMouseEnter={this.rotate}>
                        <a href="/" id='logoLink'></a>
                    </div>
                        <span id='logoLetters'>MP</span>
                </div>
                <Links>
                    <Li to='/' >Home</Li>
                    <Li to='/projects' >Projects</Li>
                    <Li to='/resume' >Resume</Li>
                    <Li to='/contact' >Contact</Li>
                </Links>
            </Nav>
        );
        }

};

export default Navbar;