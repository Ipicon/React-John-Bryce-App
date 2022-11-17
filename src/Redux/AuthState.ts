import UserModel from "../Models/UserModel";
import jwtDecode from "jwt-decode";
import { createStore } from "redux";

// 1 - State
export class AuthState {
    public token: string = null;
    public user: UserModel = null;

    public constructor() {
        this.token = localStorage.getItem("token");
        if(this.token) {
            this.user = jwtDecode<{ user: UserModel }>(this.token).user;
        }
    }
}

// 2 - ActionType
export enum AuthActionType {
    Register = "Register",
    Login = "Login",
    Logout = "Logout"
}

// 3 - Action
export interface AuthAction {
    type: AuthActionType;
    payload?: string; // Optional
}

// 4 - Action Creators
export function registerAction(token: string): AuthAction {
    return { type: AuthActionType.Register, payload: token };
}
export function loginAction(token: string): AuthAction {
    return { type: AuthActionType.Login, payload: token };
}
export function logoutAction(): AuthAction {
    return { type: AuthActionType.Logout };
}

// 5 - Reducer
export function authReducer(currentState = new AuthState(), action: AuthAction): AuthState {
    const newState = { ...currentState };

    switch (action.type) {

        case AuthActionType.Register: // Here, the payload is the token
        case AuthActionType.Login: // Here, the payload is the token
            newState.token = action.payload;
            newState.user = jwtDecode<{ user: UserModel }>(action.payload).user;
            localStorage.setItem("token", action.payload);
            break;

        case AuthActionType.Logout: // Here, we don't have a payload
            newState.token = newState.user = null;
            localStorage.removeItem("token");
            break;
    }

    return newState;
}

// 6 - Store
export const authStore = createStore(authReducer);
