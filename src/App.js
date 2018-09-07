import React, { Component } from 'react';
import styled from 'styled-components';

import Navbar from './Navbar';
import Home from './Home';
import Projects from './Projects';
import Resume from './Resume';
import Contact from './Contact';
import Footer from './Footer';

import {Switch, Route} from 'react-router-dom';

class App extends Component {
  render() {

    const MainDiv = styled.div`
      border: 10px solid #494c4e;
      margin: -8px;
    `

    return (
      <MainDiv>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/projects' component={Projects} />
          <Route path='/resume' component={Resume} />
          <Route path='/contact' component={Contact} />
        </Switch>
        <Footer />
      </MainDiv>
    );
  }
}

export default App;
