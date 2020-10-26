import constant from "../assets/json/constant.json";
import HttpService from "./httpService";
import environment from "../assets/json/environment.json";

export default class PromoService {
    constructor() {
        this.httpService = new HttpService();
    }
    getPromo() {
        return this.httpService.get(environment.baseUrl + constant.api.promo);
    }
    // deleteMenuItem(item){
    //     return this.httpService.post(environment.baseUrl + constant.api.deleteOne, item);
    // }
}
