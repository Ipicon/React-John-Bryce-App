import { NavLink } from "react-router-dom";
import TotalOutOfStock from "../../ProductsArea/TotalOutOfStock/TotalOutOfStock";
import TotalProducts from "../../ProductsArea/TotalProducts/TotalProducts";
import "./Menu.css";

function Menu(): JSX.Element {
    return (
        <div className="Menu">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/products">Products</NavLink>
            <NavLink to="/about">About</NavLink>

            <TotalProducts />
            <TotalOutOfStock />
        </div>
    );
}

export default Menu;
