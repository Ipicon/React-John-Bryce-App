import "./Menu.css";
import {NavLink} from "react-router-dom";
import TotalProducts from "../../ProductsArea/TotalProducts/TotalProducts";
import TotalOutOfStock from "../../ProductsArea/TotalOutOfStock/TotalOutOfStock";
import TotalEmployees from "../../EmployeesArea/TotalEmployees/TotalEmployees";
import {AuthState, authStore} from "../../../Redux/AuthState";
import {useSelector} from "react-redux";
import UserModel from "../../../Models/UserModel";
import {useEffect, useState} from "react";

function Menu(): JSX.Element {
    const [user, setUser] = useState<UserModel | null>();

    useEffect(() => {
        setUser(authStore.getState().user);

        const unsubscribe = authStore.subscribe(() => setUser(authStore.getState().user))
        return () => unsubscribe();
    }, [])
    return (
        <div className="Menu">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/products">Products</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/employees">Employees</NavLink>
            {user && <NavLink to="/categories">Categories</NavLink>}
            <TotalProducts/>
            <TotalOutOfStock/>
            <TotalEmployees/>
        </div>
    );
}

export default Menu;
