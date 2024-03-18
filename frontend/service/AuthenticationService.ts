import axios, {AxiosBasicCredentials, AxiosResponse} from "axios";

export class AuthenticationService {

    AUTH_SERVICE = "http://localhost:8090/auth";

    async post(endpoint: string, body: any, credentials?: AxiosBasicCredentials) {
        const url = this.AUTH_SERVICE + this.transformEndpoint(endpoint);

        const result: AxiosResponse = await axios.post(
            url,
            body && {},
            {
                headers: {
                    "Allow-Access-Control-Origin": "*",
                },
                withCredentials: true,
                auth: credentials
            }
        );

        return result;
    }

    transformEndpoint(endpoint: string) {
        return endpoint.toString().startsWith("/") ? endpoint : "/" + endpoint;
    }



}