import {Component} from "react";
import "./IDontBelieveImUsingCC.css";

interface ClockProps {
    format: string;
}

interface ClockState {
    time: string;
}

class IDontBelieveImUsingCC extends Component<ClockProps, ClockState> {
    private timerId: number;
    public constructor(props: ClockProps) {
        super(props);
        this.state = {
            time: ""
        };
    }

    public componentDidMount(): void {
        this.timerId = window.setInterval(() => {
            const time = new Date().toLocaleTimeString('en-US', {hour12: this.props.format !== "24h"});

            this.setState({time});

            console.log(time)
        }, 1000);
    }

    public componentWillUnmount():void {
        window.clearInterval(this.timerId);
    }

    private handleClick = () => {
        this.setState({time: '🕐'});
    }

    public render(): JSX.Element {
        return (
            <div className="Clock Box">
                <span>{this.state.time}</span>
                <button onClick={this.handleClick}>🕐</button>
            </div>
        );
    }
}

export default IDontBelieveImUsingCC;
