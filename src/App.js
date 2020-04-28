import React, { Component } from 'react';

// import components
import LandingPage from './Components/LandingPage';
import Description from './Components/Description';
import SelectionMenu from './Components/SelectionMenu'
import firebase from './firebase';

// styling import
import './styles/sass/style.css';

class App extends Component {
  constructor() {
    super();
  }

  componentDidMount(){
      // setting up the firebase listener 
      const dbRef = firebase.database().ref();
      dbRef.on('value', (response) => {
        // here we use Firebase's .val() method to parse our database info the way we want it
        console.log(response.val());
      });
  }

  render() {
    return (
      <>
        <header className="appHeader">
          <LandingPage />
        </header>
        <main>
          <Description />
          <SelectionMenu />
        </main>
      </>
    );
  }
}

export default App;
