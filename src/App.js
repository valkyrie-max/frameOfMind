import React, { Component } from 'react';

// import components
import LandingPage from './Components/LandingPage';

// styling import
import './styles/sass/style.css';

class App extends Component {
  // constructor goes here

  render() {
    return (
      <header className="appHeader">
        <LandingPage />
        </header>
    );
  }
}

export default App;
