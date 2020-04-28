import React, { Component } from 'react';

// import components
import LandingPage from './Components/LandingPage';
import Description from './Components/Description';
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
  
  // generating buttons by using map method to DRY the code
  generateButtons = () => {
    const buttonArray = [
      `anger`,
      `joy`,
      `sadness`,
      `tranquil`,
      `empty`
    ]

    return buttonArray.map((value) => {
      return <button onClick={this.handleUserClick} type="submit" value={value}>{value}</button>
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }
  

  // hide form on submit
  state = {
    showForm: true
  }
  toggleForm = () => {
    this.setState({
      showForm: !this.state.showForm
    })
  }

  handleUserClick = (event) => {
    const userValue = event.target.value;
    console.log(userValue)
    this.toggleForm();
  }


  render() {
    const formVisibility = this.state.showForm ? '' : 'sr-only'
    return (
      <>
        <header className="appHeader">
          <LandingPage />
        </header>
        <main>
          <Description />
          <section className="selectionMenu">
                <form className={formVisibility} onSubmit={this.handleSubmit} action="" id="userSelectionMenu">
                  <label htmlFor="">make a choice</label>
                  {this.generateButtons()}
                </form>
            </section>
        </main>
      </>
    );
  }
}

export default App;
