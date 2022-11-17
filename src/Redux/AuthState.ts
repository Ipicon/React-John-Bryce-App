import UserModel from "../Models/UserModel";
import jwtDecode from "jwt-decode";
import {createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";

export class AuthState {
    public token: string | null = null;
    public user: UserModel | null = null;

    public constructor() {
        this.token = localStorage.getItem("token");

        if (this.token) {
            this.user = jwtDecode<{ user: UserModel }>(this.token).user;
        }
    }
}

export type AuthActionType = "Register" | "Login" | "Logout";

export interface AuthAction {
    type: AuthActionType;
    payload?: string;
}

export const registerAction = (token: string): AuthAction => {
    return {
        type: "Register",
        payload: token,
    }
}

export const loginAction = (token: string): AuthAction => {
    return {
        type: "Login",
        payload: token,
    }
}

export const logoutAction = (): AuthAction => {
    return {
        type: "Logout",
    }
}

export const authReducer = (currentState = new AuthState(), action: AuthAction): AuthState => {
    const newState = {...currentState};

    switch (action.type) {
        case "Register":
        case "Login":
            const payload = action.payload as string;

            newState.token = payload;
            newState.user = jwtDecode<{ user: UserModel }>(payload).user;

            localStorage.setItem("token", payload);
            break;

        case "Logout":
            newState.token = null;
            newState.user = null;

            localStorage.removeItem("token");
            break;
    }
    return newState;
}

// export const authStore = createStore(authReducer, composeWithDevTools());
export const authStore = createStore(authReducer);