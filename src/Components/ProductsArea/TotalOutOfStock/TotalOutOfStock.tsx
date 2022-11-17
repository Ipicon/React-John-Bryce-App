import "./TotalOutOfStock.css";
import {useSelector} from "react-redux";
import {ProductsState} from "../../../Redux/ProductsState";

function TotalOutOfStock(): JSX.Element {
    const count = useSelector<ProductsState, number>(productsState => {
        return productsState.products.filter(product => +product.stock === 0).length || 0;
    });

    return (
        <div className="TotalOutOfStock Box">
            <span>Out Of Stock: {count}</span>
        </div>
    );
}

export default TotalOutOfStock;
