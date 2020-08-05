import constant from "../assets/json/constant.json";
import HttpService from "./httpService";
import environment from "../assets/json/environment.json";


export default class RewardsService {
    constructor() {
        this.httpService = new HttpService();
    }

    rewardPoints(data) {
        return this.httpService.post(environment.baseUrl + constant.api.rewardPoints, data);
    }
}
