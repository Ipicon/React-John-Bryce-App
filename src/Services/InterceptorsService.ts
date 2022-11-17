import axios from "axios";
import authService from "./AuthService";
import {authStore} from "../Redux/AuthState";

class InterceptorsService {
    public createInterceptor(): void {
        axios.interceptors.request.use(request => {
            if (request.url?.indexOf("product") !== -1) {
                console.log("Start Request:", request);
            }

            return request;
        });

        axios.interceptors.response.use(response => {
            if (response.config.url?.indexOf("product") !== -1) {
                console.log("Got Response:", response);
            }

            return response;
        });

        axios.interceptors.request.use(request => {
            if (authService.isLoggedIn && request.headers) {
                request.headers.Authorization = "Bearer " + authStore.getState().token;
            }

           return request;
        });
    }
}

const interceptorsService = new InterceptorsService();

export default interceptorsService;