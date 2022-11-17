import "./BestSeller.css";
import {useState} from "react";

function BestSeller(): JSX.Element {
    const [name, setName] = useState("");
    const [totalItems, setTotalItems] = useState(0);

    const show = ():void => {
        setName("Falafel Ubanav");
        setTotalItems(10);
    }

    return (
        <div className="BestSeller Box">
			<button onClick={show}>Show Best Seller</button>
            <span>Name: {name}, Total items: {totalItems}</span>
        </div>
    );
}

export default BestSeller;
