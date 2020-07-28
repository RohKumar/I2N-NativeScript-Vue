import constant from "../assets/json/constant.json";
import HttpService from "./httpService";
import environment from "../assets/json/environment.json";

export default class LoginService {
    constructor() {
        this.httpService = new HttpService();
    }

    login(user) {
        return this.httpService.post(environment.baseUrl + constant.api.login, user);
    }
    signUp(user) {
        return this.httpService.post(environment.baseUrl + constant.api.signUp, user);
    }
    getRoll() {
        return this.httpService.get(environment.baseUrl + constant.api.role);
    }
}
