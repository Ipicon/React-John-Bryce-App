import axios from "axios";

class InterceptorsService {

    public createInterceptors(): void {

        axios.interceptors.request.use(request => {
            if (request.url.indexOf("products") >= 0) {
                console.log("Start Request...", request);
            }
            return request;
        });

        axios.interceptors.response.use(response => {
            if (response.config.url.indexOf("products") >= 0) {
                console.log("Got Response...", response);
            }
            return response;
        });

    }

}

const interceptorsService = new InterceptorsService();

export default interceptorsService;
