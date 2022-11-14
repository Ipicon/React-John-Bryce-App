import "./Desserts.css";
import dessertImage from "../../../Assets/Images/Dessert.jpg";
import { SyntheticEvent } from "react";
import notifyService from "../../../Services/NotifyService";

function Desserts(): JSX.Element {

    const items: { id: number, name: string }[] = [
        { id: 1, name: "Ice Cream" },
        { id: 2, name: "Apple Pie" },
        { id: 3, name: "Eclair" }
    ];

    // function totalDesserts(): void {
    //     notifyService.success("Total desserts: " + items.length);
    // }

    function totalDesserts(args: SyntheticEvent): void {
        console.log(args.target); // The component raised the event
        notifyService.success("Total desserts: " + items.length);
    }

    return (
        <div className="Desserts Box">
            <img src={dessertImage} />
            <span>Our Desserts: </span>
            {items.map(item => <span key={item.id}> 🍰 {item.name} </span>)}
            <button onClick={totalDesserts}>Total Desserts</button>
        </div>
    );
}

export default Desserts;
