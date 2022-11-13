import { useState } from "react";
import "./BestSeller.css";

function BestSeller(): JSX.Element {

    // const arr = useState<string>();
    // const name = arr[0];
    // const setName = arr[1];
    const [name, setName] = useState<string>("");

    // let totalItems = 0;
    const [totalItems, setTotalItems] = useState<number>(0);

    function show(): void {
        setName("Falafel Ubanav");
        setTotalItems(10);
    }

    return (
        <div className="BestSeller Box">
            <button onClick={show}>Show Best Seller</button>
            <span>Name: {name}, Total Items: {totalItems}</span>
        </div>
    );
}

export default BestSeller;
