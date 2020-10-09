import constant from "../assets/json/constant.json";
import HttpService from "./httpService";
import environment from "../assets/json/environment.json";

export default class ItemService {
    constructor() {
        this.httpService = new HttpService();
    }

    getItems() {
        return this.httpService.get(environment.baseUrl + constant.api.item);
}
}
