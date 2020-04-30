// toggle different class based on user choice 
import React, { Component } from 'react'; 

class Emotion extends Component {

    render() {
        return(
            <>  
                <label htmlFor="userNameInput" className="nameHere">leave your name here.</label>
                <input placeholder="or don't." type="text" name="userName" id="userNameInput"/>
                <label htmlFor="userTextInput" className="characterLimit">maximum length: 1000 characters.</label>
                <textarea id="userTextInput" placeholder="let it out." className="userLetterText" maxLength="1000" cols="30" rows ="10" name="userTextInput"></textarea>
                <button className="submitLetter" type="submit">share my letter</button>
            </>
        )
    }
}

export default Emotion;