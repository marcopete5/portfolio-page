import React, {Component} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

let turn = 0;

class Navbar extends Component{
    constructor(){
        super()

        this.state = {
            deg: 0,
            display: 'none',
        }
    }

    rotate = () => {
        this.setState(prevState => {
            return{
                deg: prevState.deg === 0 ? 180 : 0
            }
        })
    }

    dropDown = () => {
        this.state.display === 'none' ? this.setState({display: 'block'}) : this.setState({display: 'none'})
    }

    render(){
        const Nav = styled.nav`
            display: grid;
            grid-template-columns: 1fr 1fr;
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
            right: 2%;
            height: 25px;

            @media (max-width: 600px) {
                position: relative;
                top: 60px;
                line-height: 50px;
                right: 100%;
                margin: 11px 0px;
                padding: 10px 0px 0px 25px; 
                display: block;
                height: 100%;
              }
        `
        const Lin = styled(Link)`
            text-decoration: none;
            list-style-type: none;
            color: #494c4e;
            font-family: 'Nunito',sans-serif;
            font-weight: 600;
            font-size: 15px;
        `
        const Li = styled.li`
            list-style-type: none;
            position: relative;
            right: 15px;
            display: block;
            

            @media (max-width: 600px){
                display: ${this.state.display}; 
                border-bottom: 1px solid #494c4e; 
                width: 150%; 
            }
        `
        const Image = styled.img`
            width: 8%;
            position: absolute;
            right: 12%;
            top: 12px;
            display: none;

            @media (max-width: 600px){
               display: block; 
            }
        `
        
        return (
            <Nav>
                <div>
                    <div id='rotateMe' style={{ transform: `rotate(${this.state.deg}deg)` }} onMouseEnter={this.rotate}>
                        <a href="/" id='logoLink'></a>
                    </div>
                        <span id='logoLetters'>MP</span>
                </div>
                <div>
                <Image onClick={this.dropDown} src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/2000px-Hamburger_icon.svg.png' alt=""/>
                <Links >
                    <Li className='underline'><Lin to='/' >Home</Lin></Li>
                    <Li className='underline'><Lin to='/projects' >Projects</Lin></Li>
                    <Li className='underline'><Lin to='/resume' >Resume</Lin></Li>
                    <Li className='underline'><Lin to='/contact' >Contact</Lin></Li>
                </Links>
                </div>
            </Nav>
        );
        }

};

export default Navbar;