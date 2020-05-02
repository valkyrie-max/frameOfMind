import React, { Component } from 'react';
import { animateScroll as scroll, scroller } from "react-scroll";

class LetterTopPart extends Component {
    handleCreditsClick = (event) => {
        event.preventDefault();
        scroller.scrollTo('credits', {
            duration: 2000,
            delay: 0,
            smooth: 'easeInOutQuart'
        })
    }

    render() {
        return (
            <div className="lettersText">
                <h2>see what others left behind.</h2>
                <div className="creditsReferral">
                    <p>"who's music is that?"</p>
                    <p>"what fonts did you use?"</p>
                    <p>you can find credits and info</p>
                    <a onClick={this.handleCreditsClick} href="#credits"><span className="fatText">here</span></a>
                </div>
            </div>
        )
    }
}

export default LetterTopPart;