import "./Clock.css";
import {useEffect, useState} from "react";
import DayPartIcon from "../../SharedArea/DayPartIcon/DayPartIcon";

function Clock(): JSX.Element {
    const [time, setTime] = useState<string>("time....");

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date().toLocaleTimeString();
            setTime(now);
            console.log(Math.random());
        }, 1000);

        return () => {
            clearInterval(interval);
        }
    }, []);

    return (
        <div className="Clock Box">
            <span>{time}</span>
            <DayPartIcon hour={new Date().getHours()} />
        </div>
    );
}

export default Clock;
