import { useEffect, useState } from "react";
import { productsStore } from "../../../Redux/ProductsState";
import "./TotalProducts.css";

function TotalProducts(): JSX.Element {

    const [count, setCount] = useState<number>();

    useEffect(() => {
        setCount(productsStore.getState().products.length);
        productsStore.subscribe(() => {
            setCount(productsStore.getState().products.length);
        });
    }, []);

    return (
        <div className="TotalProducts Box">
            <span>Total Products: {count}</span>
        </div>
    );
}

export default TotalProducts;
