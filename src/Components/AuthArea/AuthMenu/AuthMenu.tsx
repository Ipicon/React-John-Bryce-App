import "./AuthMenu.css";
import {useEffect, useState} from "react";
import UserModel from "../../../Models/UserModel";
import {authStore} from "../../../Redux/AuthState";
import {Link, useNavigate} from "react-router-dom";
import authService from "../../../Services/AuthService";
import notifyService from "../../../Services/NotifyService";

function AuthMenu(): JSX.Element {
    const [user, setUser] = useState<UserModel | null>(null)

    useEffect(() => {
        setUser(authStore.getState().user);

        const unsubscribe = authStore.subscribe(() => setUser(authStore.getState().user))

        return () => unsubscribe();
    }, [])

    const logout = () => {
        authService.logout();
        notifyService.success("bye bye");
    }

    if (user) return (
      <div className="AuthMenu">
          <span>Hello {user.firstName} {user.lastName}</span>
          <span> | </span>
          <Link to="/home" onClick={logout}>Logout</Link>
      </div>
    );

    return (
        <div className="AuthMenu">
            <span>Hello guest</span>
            <span> | </span>
            <Link to="/register">Register</Link>
            <span> | </span>
            <Link to="/login">Login</Link>
        </div>
    );
}

export default AuthMenu;
