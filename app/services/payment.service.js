import constant from "../assets/json/constant.json";
import HttpService from "./httpService";
import environment from "../assets/json/environment.json";

export default class PaymentService {
    constructor() {
        this.httpService = new HttpService();
    }

    addPayment(order) {
        return this.httpService.post(environment.baseUrl + constant.api.payment, order);
    }
    getPayments() {
        return this.httpService.get(environment.baseUrl + constant.api.payment);
    }
    deleteOne(order){
        return this.httpService.post(environment.baseUrl + constant.api.deleteOne, order);
    }
}