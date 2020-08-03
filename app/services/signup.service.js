import constant from "../assets/json/constant.json";
import HttpService from "./httpService";
import environment from "../assets/json/environment.json";


export default class SignupService {
    constructor() {
        this.httpService = new HttpService();
    }
    
    signUp(user) {
        return this.httpService.post(environment.baseUrl + constant.api.signUp, user);
    }
    getRoles() {
        return this.httpService.get(environment.baseUrl + constant.api.role);
    }
}