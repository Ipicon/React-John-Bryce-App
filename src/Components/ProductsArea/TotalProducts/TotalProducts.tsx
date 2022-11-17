import "./TotalProducts.css";
import {useEffect, useState} from "react";
import {productStore} from "../../../Redux/ProductsState";

function TotalProducts(): JSX.Element {
    const [count, setCount] = useState<number>();

    useEffect(() => {
        setCount(productStore.getState().products.length);

        const unsubscribe = productStore.subscribe(() => setCount(productStore.getState().products.length));

        return () => unsubscribe();
    }, [])

    return (
        <div className="TotalProducts Box">
            <span>Total Products: {count}</span>
        </div>
    );
}

export default TotalProducts;
