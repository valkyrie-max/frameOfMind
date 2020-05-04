import React, { Component } from 'react';
import { scroller } from "react-scroll";

class LetterTopPart extends Component {
    handleCreditsClick = (event) => {
        event.preventDefault();
        scroller.scrollTo('credits', {
            duration: 2000,
            delay: 0,
            smooth: 'easeInOutQuart'
        })
    }

    refreshPage = () => {
        window.location.reload(true);
    }

    render() {
        return (
            <div className="topTextContainer">
                <div className="lettersText">
                    <h2>see what others left behind.</h2>
                    <div className="creditsReferral">
                        <p>"who's music is that?"</p>
                        <p>"what fonts did you use?"</p>
                        <p>you can find this info</p>
                        <a onClick={this.handleCreditsClick} href="#credits"><span className="fatText">here</span></a>
                    </div>
                </div>
                <button onClick={this.refreshPage} type="button" className="restart">restart</button>
            </div>
        )
    }
}

export default LetterTopPart;