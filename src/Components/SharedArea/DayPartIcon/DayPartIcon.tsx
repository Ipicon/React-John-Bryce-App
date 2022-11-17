import "./DayPartIcon.css";
import {memo} from "react";

interface DayPartIconProps {
    hour: number;
}

const getIconByHour = (hour: number): string => {
    if (hour >= 6 && hour <= 10) return "☕";
    else if (hour >= 11 && hour <= 15) return "🥩";
    else if (hour >= 16 && hour <= 20) return "🍰";
    return "🍷";
}

function DayPartIcon(props: DayPartIconProps): JSX.Element {
    console.log("is being rendered");


    return (
        <div className="DayPartIcon">
            <span>{getIconByHour(props.hour)}</span>
        </div>
    );
}

export default memo(DayPartIcon, (prevProps, currProps) => getIconByHour(prevProps.hour) === getIconByHour(currProps.hour));
