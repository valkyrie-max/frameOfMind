import React, { Component } from 'react';
import {Animated} from "react-animated-css";
import ScrollAnimation from 'react-animate-on-scroll';
import { animateScroll as scroll, scroller } from "react-scroll";
import firebase from './firebase';

// import components
import LandingPage from './Components/LandingPage';
import Description from './Components/Description';
import MusicPlayer from './Components/MusicPlayer'

// styling import
import './styles/sass/style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userChoice: '',
      letters: [],
      userLetter: '',
      userName: ''
    }
  }

  // handle an option click
  handleUserClick = (event) => {
    const userValue = event.target.value;
    this.setState({
      userChoice: userValue,
    })
    scroller.scrollTo('emotionContainer', {
      duration: 1500,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }

  // handle a button click to take the user back to the select 
  handleGoBack = () => {
    scroller.scrollTo('menuFormContainer', {
      duration: 1500,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
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
      return <button onClick={this.handleUserClick} type="submit" className={value} value={value}>{value}</button>
    })
  }

  // handle option submit
  handleOptionSubmit = (event) => {
    event.preventDefault(); 
  }

  //handle change in the textarea to store data from the user 
  handleLetterChange = (event) => {
    this.setState({
      userLetter: event.target.value
    })
  } 

  // handle change in the text input to store user's name
  handleNameChange = (event) => {
    this.setState({
      userName: event.target.value
    })
  }

  // handle onClick to submit the letter
  handleLetterClick = (event) => {
    event.preventDefault(); 
    if (this.state.userLetter !== '' && this.state.userChoice !== '') {
      const dbRef = firebase.database().ref(); 
      const newInput = {
        userLetter: this.state.userLetter,
        userName: this.state.userName
      }
      dbRef.push(newInput);
      this.setState({
        userLetter: '',
        userName: ''
      })
      scroller.scrollTo('lettersContainer', {
        duration: 2000,
        delay: 0,
        smooth: 'easeInOutQuart'
    })
    } else if (this.state.userChoice == '' && this.state.userLetter !== '') {
      return <p>select an emotion please. if you are unsure, just go with empty.</p>
      // alert(`select an emotion please. if you are unsure, just go with empty.`)
    } else {
      return alert(`i'm sorry but you'll have to type at least a couple of words. i hope it will make you feel better.`)
    }
  }


  componentDidMount() {
    const dbRef = firebase.database().ref();
    dbRef.on(`value`, (response) =>{
      const newDataSet = [];
      const data = response.val(); 
      for (let key in data) {
        newDataSet.push(data[key]);
      }
      this.setState({
        letters: newDataSet
      })
    })
  }
  

  render() {
    // emotion classes
    const emotionClass = `${this.state.userChoice}Main emotionContainer`
    return (
      <>
        <header className="appHeader">
          <Animated animationIn="fadeInDown" animationOut="fadeOutDown" animationInDuration={1800} animationOutDuration={1800} isVisible={true}>
              <LandingPage />
          </Animated>
        </header>
        <main>
          <ScrollAnimation animateOnce={true} animateIn="fadeInLeft"  duration={2} initiallyVisible={false}>
            <Description />
          </ScrollAnimation>
          <ScrollAnimation animateOnce={true} animateIn="fadeInRight"  duration={2} initiallyVisible={false}>
            <section  className="selectionMenu">
              <div className="wrapper">
                <form className="menuFormContainer" onSubmit={this.handleOptionSubmit} action="" id="userSelectionMenu">
                  <label className="optionLabel" htmlFor="userSelectionMenu">make a choice</label>
                  <div className="buttons">
                    {this.generateButtons()}
                  </div>
                </form>
              </div>
            </section>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInLeft" duration={2} initiallyVisible={false}>
            <section className={emotionClass}>
              <div className="wrapper">
                <label htmlFor="userEmotionInput" className="emotionInputLabel">you chose: {this.state.userChoice}</label>
                <form className="emotionForm" action="" id="userEmotionInput" name="userLetterForm" method="">
                  <div className={this.state.userChoice}>
                    {/* name input */}
                    <label htmlFor="userNameInput" className="nameHere">leave your name here.</label>
                    <input value={this.state.userName} onChange={this.handleNameChange} placeholder="or don't." type="text" name="userName" id="userNameInput"/>
                    {/* textarea input */}
                    <label htmlFor="userTextInput" className="characterLimit">maximum length: 1000 characters.</label>
                    <textarea value={this.state.userLetter} onChange={this.handleLetterChange} id="userTextInput" placeholder="let it out." className="userLetterText" maxLength="1000" cols="30" rows ="10" name="userTextInput"></textarea>
                    {/* submit letter */}
                    <button onClick={this.handleLetterClick} className="submitLetter" type="submit">share my letter</button>
                  </div>
                  <MusicPlayer name={this.state.userChoice} />
                  <button className="backToSelection" type="button" onClick={this.handleGoBack}>take me back up to selection</button>
                </form>
              </div>
            </section>
          </ScrollAnimation>
          <section className="lettersContainer">
            <ul>
              {
                this.state.letters.map((letter, value) => {
                    return (
                      <li key={value}>
                        <h2>{letter.userName}</h2>
                        <p>{letter.userLetter}</p>
                        <button type="button" className="deleteLetter">remove letter.</button>
                      </li>
                      )
                })
              }
            </ul>
          </section>
        </main>
      </>
    );
  }
}

export default App;
