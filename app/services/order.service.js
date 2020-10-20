import constant from "../assets/json/constant.json";
import HttpService from "./httpService";
import environment from "../assets/json/environment.json";

export default class OrderService {
    constructor() {
        this.httpService = new HttpService();
    }

    addOrder(order) {
        return this.httpService.post(environment.baseUrl + constant.api.order, order);
    }
    getOrders() {
        return this.httpService.get(environment.baseUrl + constant.api.order);
    }
    deleteOne(order){
        return this.httpService.post(environment.baseUrl + constant.api.deleteOne, order);
    }
}
