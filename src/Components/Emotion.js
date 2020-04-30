// toggle different class based on user choice 
import React, { Component } from 'react'; 

class Emotion extends Component {
    render() {
        return(
            <>
                <textarea id="userTextInput" className="userLetterText" maxLength="500" cols="86" rows ="20" name="userTextInput"></textarea>
                <button className="submitLetter" type="submit">share my letter</button>
            </>
        )
    }
}

export default Emotion;