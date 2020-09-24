import constant from "../assets/json/constant.json";
import HttpService from "./httpService";
import environment from "../assets/json/environment.json";

export default class CategoryService {
    constructor() {
        this.httpService = new HttpService();
    }

    getCategory() {
        return this.httpService.get(environment.baseUrl + constant.api.category);
}
}