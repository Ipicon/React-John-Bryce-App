import { useEffect, useState } from "react";
import DayPartIcon from "../../SharedArea/DayPartIcon/DayPartIcon";
import "./Clock.css";

function Clock(): JSX.Element {

    const [time, setTime] = useState<string>("time...");

    useEffect(() => {

        const timerId = setInterval(() => {
            const now = new Date();
            const time = now.toLocaleTimeString();
            setTime(time);
            console.log("Test");
        }, 1000);

        // Will be invoked when component destroyed:
        return () => clearInterval(timerId);

    }, []);

    return (
        <div className="Clock Box">
            <span>{time}</span>
            <DayPartIcon hour={new Date().getHours()} />
        </div>
    );
}

export default Clock;
