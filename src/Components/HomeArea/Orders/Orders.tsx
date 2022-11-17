import "./Orders.css";
import withBackgroundByHour from "../../SharedArea/BackgroundByHour/WithBackgroundByHour";

function Orders(props : {number : number}): JSX.Element {
    return (
        <div className="Orders">
            <span>Delivery Hours: 9:00 to 21:00</span>
            <span>{props.number}</span>
        </div>
    );
}

export default withBackgroundByHour(Orders);
