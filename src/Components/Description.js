import React, { Component } from 'react'; 

class Description extends Component {
    render() {
        return(
            <section className="descriptionContainer">
                <div className="wrapper">
                    <div className="topText">
                        <div className="sectionName">
                            <h2>how does it work?</h2>
                        </div>
                        <div className="descriptionText">
                            <p> <span className="fatText">"frame of mind"</span> implies the mood that you are currently in.</p>
                            <p className="fatText">foM allows you to express it.</p>
                        </div>
                        <div className="socialLinks">
                            <p>you can find the stranger who made this here:</p>
                            <ul>
                                <li>
                                    <a href="https://github.com/valkyrie-max">github</a>
                                    </li>
                                <li>
                                    <a href="https://twitter.com/alisacodes">twitter</a>
                                    </li>
                            </ul>
                        </div>
                    </div>
                    <div className="mainText">
                        <h4 className="fatText">frame of MIND is a place where you can get everything off your chest.</h4>
                        <div className="fullDescription">
                            <p><span className="fatText">choose</span> an emotion from the list that fits your current mood.</p>
                            <p>then you can <span className="fatText">listen</span> to the offered melody <span className="crossedOut">(or not)</span> while <span className="fatText">writing</span> about what you are feeling in this very moment.</p>
                            <p>you can <span className="fatText">share</span> your thoughts with others after you are done by posting them to the letters section. <span className="crossedOut">or you can erase them.</span></p>
                            <p><span className="fatText">signing</span> your letter with your name or a nickname is also an option. <span className="crossedOut">but you don't have to.</span></p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Description