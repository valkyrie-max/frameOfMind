import React from 'react'; 

const LandingPage = () => {
    return(
        <div className="wrapper">
            <div className="landingPageContainer">
                <div className="landingPageMainText">
                    <p className="landingPageAestheticElement ">はじめまして!</p>
                    <h1 className="landingPageHeading">welcome to the</h1>
                    <div className="logoContainer">
                        <img src={require('../assets/projectLogo.png')} alt=""/>
                    </div>
                    <h2 className="landingPageDescription">a place where you can let it all out.</h2>
                </div>

                <div className="landingPageNavButtons">
                    <ul>
                        <li>
                            <button className="landingPageAbout" type="button">about</button>
                        </li>
                        <li>
                            <button aria-label="let's do it!" className="landingPageGo" type="button">やろう!</button>
                        </li>
                        <li>
                            <button className="landingPageLetters" type="button">letters</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;