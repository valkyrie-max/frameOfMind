import React, { Component } from 'react'; 
import { scroller } from "react-scroll";

class LandingPage extends Component {
    handleAbout = (event) => {
        event.preventDefault(); 
        scroller.scrollTo('descriptionContainer', {
            duration: 1500,
            delay: 0,
            smooth: 'easeInOutQuart'
        })
    }

    handleGo = (event) => {
        event.preventDefault(); 
        scroller.scrollTo('selectionMenu', {
            duration: 2000,
            delay: 0,
            smooth: 'easeInOutQuart'
        })
    }

    handleLetters = (event) => {
        event.preventDefault(); 
        scroller.scrollTo('lettersContainer', {
            duration: 2000,
            delay: 0,
            smooth: 'easeInOutQuart'
        })
    }
    render() {
        return(
            <div className="wrapper">
                <div className="landingPageContainer">
                    <div className="landingPageMainText">
                        <p className="landingPageAestheticElement ">はじめまして!</p>
                        <h2 className="landingPageHeading">welcome to the</h2>
                        <div className="logoContainer">
                            <img src={require('../assets/projectLogo.png')} alt="A logo for the application that says 'frame of mind'"/>
                        </div>
                        <h1 className="landingPageDescription"> <span className="fatText">frame of MIND:</span> a place where you can let it all out.</h1>
                    </div>
    
                    <div className="landingPageNavButtons">
                        <ul>
                            <li>
                                <button onClick={this.handleAbout} className="landingPageAbout" type="button">about</button>
                            </li>
                            <li>
                                <button onClick={this.handleGo} className="landingPageGo" type="button">start</button>
                            </li>
                            <li>
                                <button onClick={this.handleLetters} className="landingPageLetters" type="button">letters</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default LandingPage;