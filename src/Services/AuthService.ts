import UserModel from "../Models/UserModel";
import axios from "axios";
import appConfig from "../Utils/AppConfig";
import {authStore, loginAction, logoutAction, registerAction} from "../Redux/AuthState";
import CredentialsModel from "../Models/CredentialsModel";

class AuthService {
    public async register(user: UserModel): Promise<void> {
        const response = await axios.post<string>(appConfig.registerURL, user);
        const token = response.data;

        authStore.dispatch(registerAction(token));
    }

    public async login(credentials: CredentialsModel): Promise<void> {
        const response = await axios.post<string>(appConfig.loginURL, credentials);
        const token = response.data;

        authStore.dispatch(loginAction(token));
    }

    public logout(): void {
        authStore.dispatch(logoutAction());
    }

    public get isLoggedIn(): boolean {
        return authStore.getState().token !== null;
    }
}

const authService = new AuthService();

export default authService;

