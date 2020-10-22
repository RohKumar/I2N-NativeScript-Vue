import constant from "../assets/json/constant.json";
import HttpService from "./httpService";
import environment from "../assets/json/environment.json";

export default class LocationService {
    constructor() {
        this.httpService = new HttpService();
    }

    addLocation(address) {
        return this.httpService.post(environment.baseUrl + constant.api.location, address);
    }
    getAllLocation() {
        return this.httpService.get(environment.baseUrl + constant.api.location);
    }
    // deleteOne(order){
    //     return this.httpService.post(environment.baseUrl + constant.api.deleteOne, order);
    // }
}
