import React, { Component } from 'react';
import firebase from './firebase';



// import components
import LandingPage from './Components/LandingPage';
import Description from './Components/Description';
import Emotion from './Components/Emotion';

// styling import
import './styles/sass/style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userChoice: '',
      showForm: true,
      showEmotion: true
    }
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

  // handle submits
  handleOptionSubmit = (event) => {
    event.preventDefault(); 
  }
  handleEmotionSubmit = (event) => {
    event.preventDefault(); 
  }
  

  // hide form on submit
  toggleForm = () => {
    this.setState({
      showForm: !this.state.showForm
    })
  }

  // show emotion field
  toggleEmotion = () => {
    this.setState({
      showEmotion: !this.state.showEmotion
    })
    console.log(`working`)
  }

  handleUserClick = (event) => {
    const userValue = event.target.value;
    this.setState({
      userChoice: userValue
    })
    console.log(userValue)
    this.toggleForm();
    this.toggleEmotion();
  }

  render() {
    // toggling classes
    const formVisibility = this.state.showForm ? '' : 'srOnly'
    const emotionVisibility = this.state.showEmotion ? 'srOnly' : ''
    const emotionClass = `${this.state.userChoice} ${emotionVisibility}`

    return (
      <>
        <header className="appHeader">
          <LandingPage />
        </header>
        <main>
          <Description />
            <section className="selectionMenu">
              <div className="wrapper">
                <form className={formVisibility} onSubmit={this.handleOptionSubmit} action="" id="userSelectionMenu">
                  <label htmlFor="userSelectionMenu">make a choice</label>
                  <div className="buttons">
                    {this.generateButtons()}
                  </div>
                </form>
              </div>
            </section>
            <section className={emotionClass}>
              <div className="wrapper">
                  <form className="emotionForm" onSubmit={this.handleEmotionSubmit} action="" name="userLetterForm" method="">
                    <Emotion name={this.state.userChoice}/>
                  </form>
              </div>
            </section>
        </main>
      </>
    );
  }
}

export default App;
