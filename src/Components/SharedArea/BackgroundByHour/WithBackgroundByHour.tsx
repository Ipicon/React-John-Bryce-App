import "./BackgroundByHour.css";
import {ComponentType, FC} from "react";

function withBackgroundByHour<T extends Object>(InnerComponent: ComponentType<T>): FC<T> {
    const getColorByHour = () => {
        const now = new Date();

        let hour = now.getHours();
        if (hour > 12) hour = 24 - hour;

        const hue = Math.floor(hour * 255 / 12);
        return `rgb(${hue}, ${hue}, ${hue})`;
    }

    const style = {
        backgroundColor: getColorByHour(),
        disable: "inline-block"
    };

    return (props: T) => {
        return (
            <div style={style} className="Box">
                <InnerComponent {...props}/>
            </div>
        );
    }
}

export default withBackgroundByHour;
