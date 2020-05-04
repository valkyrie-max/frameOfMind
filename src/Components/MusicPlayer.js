import React from 'react';

// import audio pieces
import anger from '../assets/audio/anger.mp3'
import empty from '../assets/audio/empty.mp3'
import joy from '../assets/audio/joy.mp3'
import sadness from '../assets/audio/sadness.mp3'
import tranquil from '../assets/audio/tranquil.mp3'

// based on the prop name, display the right track
const MusicPlayer = (props) => {
    const getAudioTrack = () => {
        switch (props.name) {
            case `anger`: return <audio controls src={anger}>Sorry, your browser doesn't support the music player.</audio>;
            case `joy`: return <audio controls src={joy}>Sorry, your browser doesn't support music the player.</audio>;
            case `sadness`: return <audio controls src={sadness}>Sorry, your browser doesn't support the  music player.</audio>;
            case `tranquil`: return <audio controls src={tranquil}>Sorry, your browser doesn't support the music player.</audio>;
            case `empty`: return <audio controls src={empty}>Sorry, your browser doesn't support music the player.</audio>;
        }
    }

    return(
        <div className="audioTrack">
            {getAudioTrack()}
        </div>
    )
}

export default MusicPlayer;