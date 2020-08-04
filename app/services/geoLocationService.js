import constant from "../assets/json/constant.json";
import HttpService from "./httpService";
import environment from "../assets/json/environment.json";

export default class GeoLocationService {
    constructor() {
        this.httpService = new HttpService();
    }

    addLocation(payload) {
        return this.httpService.post(environment.baseUrl + constant.api.addGeoLocation, payload);
    }

    fetchAllUsersLocation() {
        console.log(environment.baseUrl + constant.api.addGeoLocation)
        return this.httpService.get(environment.baseUrl + constant.api.addGeoLocation);
    }
}
