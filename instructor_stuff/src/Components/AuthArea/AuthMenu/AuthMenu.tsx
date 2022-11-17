import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import UserModel from "../../../Models/UserModel";
import { authStore } from "../../../Redux/AuthState";
import authService from "../../../Services/AuthService";
import notifyService from "../../../Services/NotifyService";
import "./AuthMenu.css";

function AuthMenu(): JSX.Element {

    const [user, setUser] = useState<UserModel>();

    useEffect(() => {
        setUser(authStore.getState().user);
        const unsubscribe = authStore.subscribe(() => setUser(authStore.getState().user));
        return () => unsubscribe();
    }, []);

    function logout() {
        authService.logout();
        notifyService.success("Bye bye");
    }

    if (user) {
        return (
            <div className="AuthMenu">
                <span>Hello {user.firstName} {user.lastName}</span>
                <span> | </span>
                <NavLink to="/home" onClick={logout}>Logout</NavLink>
            </div>
        );
    }

    return (
        <div className="AuthMenu">
            <span>Hello Guest</span>
            <span> | </span>
            <NavLink to="/register">Register</NavLink>
            <span> | </span>
            <NavLink to="/login">Login</NavLink>
        </div>
    );
}

export default AuthMenu;
