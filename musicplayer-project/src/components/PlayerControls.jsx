import { useMusicPlayer } from "../hooks/useMusicPlayer";
// import { play_arrow } from '@mui/material/SvgIcon';

const PlayerControls = () => {
    const music = useMusicPlayer();

    return (
        <>
        <div>
            <p>{music.currentTrackName}</p>
        </div>
        <button onClick={music.playPreviousTrack}>Previous</button>
        <button onClick={music.togglePlay}>{music.isPlaying ? "Pause" : "Play"}</button>
        <button onClick={music.playNextTrack}>Next</button>
        </>
    );
};

export { PlayerControls };