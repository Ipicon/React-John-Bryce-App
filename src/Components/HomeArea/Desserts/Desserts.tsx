import "./Desserts.css";
import dessertImage from "../../../Assets/Images/mainDessert.jpg";
import {SyntheticEvent} from "react";
import notifyService from "../../../Services/NotifyService";

function Desserts(): JSX.Element {
    const items: { id: number, name: string }[] = [
        {id: 1, name: "Ice Cream"},
        {id: 2, name: "Apple Pie"},
        {id: 3, name: "Eclair"},
    ];

    const totalDesserts = (args: SyntheticEvent): void => {
        console.log(args.target); // The component that raised the event
        notifyService.success("Total desserts: " + items.length);
    }

    return (
        <div className="Desserts Box">
            <img src={dessertImage} alt="dessert"/>
            {items.length !== 0 &&
                <span>Our Desserts:
                    {items.map(item => <span key={item.id}>{item.name} 🍰</span>)}</span>}
            {items.length === 0 && <span>No Desserts Today Sorry!🤢🤢</span>}
            <button onClick={totalDesserts}>Total Desserts</button>
        </div>
    );
}

export default Desserts;
