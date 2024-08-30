import { useState } from "react";
import './App.css'
import { PlayerControls } from "./components/PlayerControls";
import { TrackList } from "./components/tracksList";
import { MusicContext } from "./context/musicContext";
import sinister from "./assets/sinister.mp3";
import stomping from "./assets/stomp.mp3";
import underwater from "./assets/underwater.mp3";

function App() {
    const [state, setState] = useState(
        {
            audioPlayer: new Audio(),
            currentTrackIndex: 0,
            isPlaying: false,
            tracks: [
                {
                    name: 'Sinister Music ...',
                    file: sinister,
                },
                {
                    name: 'Stomp Music ...',
                    file: stomping,
                },
                {
                    name: 'Underwater Music ...',
                    file: underwater,
                }
            ],
        }
    );
    return (
    <MusicContext.Provider value={[state, setState]}>
        <div>
            <TrackList />
            <PlayerControls />
        </div>

    </MusicContext.Provider>

    );
};

export default App;
