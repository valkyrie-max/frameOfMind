import React, { Component } from 'react';
import {Animated} from "react-animated-css";
import ScrollAnimation from 'react-animate-on-scroll';
import { animateScroll as scroll, scroller } from "react-scroll";
import firebase from './firebase';

// import components
import LandingPage from './Components/LandingPage';
import Description from './Components/Description';
import Emotion from './Components/Emotion';
import MusicPlayer from './Components/MusicPlayer'

// styling import
import './styles/sass/style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userChoice: '',
    }
  }

  // handle an option click
  handleUserClick = (event) => {
    const userValue = event.target.value;
    this.setState({
      userChoice: userValue,
    })
    scroller.scrollTo('emotionForm', {
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

  // handle submits
  handleOptionSubmit = (event) => {
    event.preventDefault(); 
  }
  handleEmotionSubmit = (event) => {
    event.preventDefault(); 
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
          <ScrollAnimation animateIn="fadeInDown" duration={2} initiallyVisible={false}>
            <section className={emotionClass}>
              <div className="wrapper">
                <label htmlFor="userEmotionInput" className="emotionInputLabel">you chose: {this.state.userChoice}</label>
                <form className="emotionForm" onSubmit={this.handleEmotionSubmit} action="" id="userEmotionInput" name="userLetterForm" method="">
                  <Emotion name={this.state.userChoice}/>
                  <MusicPlayer name={this.state.userChoice} />
                  <button className="backToSelection" type="button" onClick={this.handleGoBack}>take me back up to selection</button>
                </form>
              </div>
            </section>
          </ScrollAnimation>
        </main>
      </>
    );
  }
}

export default App;
