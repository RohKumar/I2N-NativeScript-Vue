import constant from "../assets/json/constant.json";
import HttpService from "./httpService";
import environment from "../assets/json/environment.json";

export default class RestaurantDetailService {
    constructor() {
        this.httpService = new HttpService();
    }

    
    getAllRestaurantDetails() {
        return this.httpService.get(environment.baseUrl + constant.api.restaurantDetals);
    }
}