import "./Tune.css";
import tuneSource from "../../../Assets/Audio/fade-into-you.mp3";
import { RefObject, useRef } from "react";

function Tune(): JSX.Element {

    const audioRef: RefObject<HTMLAudioElement> = useRef(null);

    return (
        <div className="Tune Box">
            <audio src={tuneSource} ref={audioRef} />
            <button onClick={() => audioRef.current?.play()}>Play</button>
            <button onClick={() => audioRef.current?.pause()}>Pause</button>
            <button onClick={() => audioRef.current?.load()}>Stop</button>
        </div>
    );
}

export default Tune;
