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
  constructor(props) {
    super(props);
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

    return buttonArray.map((value, index) => {
      return <button key={index} onClick={this.handleUserClick} type="submit" className={value} value={value}>{value}</button>
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
        userName: this.state.userName === '' ? 'anon' : this.state.userName
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
      return alert(`select an emotion please. if you are unsure, just go with empty.`)
    } else {
      return alert(`i'm sorry but you'll have to type at least a couple of words. i hope it will make you feel better.`)
    }
  }

  // once there is something on the page, grab data from Fb
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
              <LandingPage key="landingPage" />
          </Animated>
        </header>
        <main>
          <ScrollAnimation animateOnce={true} animateIn="fadeInLeft"  duration={2} initiallyVisible={false}>
            <Description key="description"/>
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
                  {/* name input */}
                  <label htmlFor="userNameInput" className="nameHere">leave your name here.</label>
                  <input className="userNameBox" value={this.state.userName} onChange={this.handleNameChange} placeholder="or don't." type="text" name="userName" id="userNameInput"/>
                  {/* textarea input */}
                  <label htmlFor="userTextInput" className="characterLimit">maximum length: 500 characters.</label>
                  <textarea value={this.state.userLetter} onChange={this.handleLetterChange} id="userTextInput" placeholder="let it out." className="userLetterText" maxLength="500" cols="30" rows ="5" name="userTextInput"></textarea>
                  {/* submit letter */}
                  <button onClick={this.handleLetterClick} className="submitLetter" type="submit">share my letter</button>
                  <MusicPlayer key="musicPlayer" name={this.state.userChoice} />
                  <button className="backToSelection" type="button" onClick={this.handleGoBack}>take me back up to selection</button>
                </form>
              </div>
            </section>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInUp" duration={2} initiallyVisible={false}>
            <section className="lettersContainer">
            <div className="wrapper">
              <div className="lettersText">
                <h2>see what others left behind.</h2>
                <div className="creditsReferral">
                  <p>"who's music is that?"</p>
                  <p>"what fonts did you use?"</p>
                  <p>you can find credits and info</p>
                  <a href="#credits"><span className="fatText">here</span></a>
                </div>
              </div>

              <ul>
                {
                  this.state.letters.map((letter, index) => {
                      return (
                        <li key={index}>
                        <h3>{letter.userName}</h3>
                        <p>{letter.userLetter}</p>
                        </li>
                      )
                  })
                }
              </ul>
            </div>
          </section>
          </ScrollAnimation>
        </main>
        <footer>
          <div className="credits">
            <h2>credits</h2>
            <div className="creditsLinks">
              <ul>
                <li>checkout the project repo on <a href="https://github.com/valkyrie-max/frameOfMind">github</a></li>
                <li>music by <a href="https://freemusicarchive.org/music/Unheard_Music_Concepts">Unheard Music Concepts</a></li>
                <li>fonts used: <a className="raleway" href="https://fonts.google.com/specimen/Raleway">Raleway</a>, <a className="merriweather" href="https://fonts.google.com/specimen/Merriweather">Merriweather</a></li>
                <li>primary color palette can be found <a href="https://coolors.co/474350-b9cdda-ebeaea-979eb1">here</a></li>
                <li>the stranger who made this can also be found on <a href="https://twitter.com/alisacodes">twitter</a></li>
              </ul>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default App;
