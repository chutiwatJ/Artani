import React, { Component } from 'react';
import NavbarWeb from './NavbarWeb';
import Slideshow from './Slideshow';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>

        <div>
          <NavbarWeb />
        </div>


        <Slideshow />

      </React.Fragment>
    );
  }
}

export default App;
