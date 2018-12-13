import React, {Component, Fragment} from 'react';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';

// Components
import Home from './home';
import About from './about';
import Works from './works';
import Contact from './contact';
import Footer from './footer';
import Skills from './skills';

// Styles
import {injectGlobal} from '../styles/global';

class Main extends Component {
  render() {
    return (
      <Fragment>
        <Home />
        <About />
        <Skills />
        <Works />
        <Contact />
        <Footer />
      </Fragment>
    );
  }
}

export default Main;