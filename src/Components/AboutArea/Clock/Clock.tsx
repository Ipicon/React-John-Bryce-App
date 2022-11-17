import { Component } from "react";
import "./Clock.css";

interface ClockProps {
    format: string;
}

interface ClockState {
    time: string;
}

// class Clock extends Component { // No props, no state
// class Clock extends Component<ClockProps> { // Props, no state
// class Clock extends Component<{}, ClockState> { // No props, has state
class Clock extends Component<ClockProps, ClockState> { // has props, has state

    private timerId: number;

    public constructor(props: ClockProps) {
        super(props);
        this.state = { time: "" };
    }

    public componentDidMount(): void {
        this.timerId = window.setInterval(() => {
            const now = new Date();
            const time = now.toLocaleTimeString('en-US', { hour12: this.props.format === "12h" });
            this.setState({ time });
        }, 1000);
    }

    public componentWillUnmount(): void {
        window.clearInterval(this.timerId);
    }

    private displayIcon = () => {
        this.setState({ time: "🕐" });
    }

    public render(): JSX.Element {

        return (
            <div className="Clock Box">
                <span>{this.state.time}</span>
                <button onClick={this.displayIcon}>🕐</button>
            </div>
        );
    }
}

export default Clock;
