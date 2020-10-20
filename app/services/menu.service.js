import constant from "../assets/json/constant.json";
import HttpService from "./httpService";
import environment from "../assets/json/environment.json";

export default class MenuService {
    constructor() {
        this.httpService = new HttpService();
    }

    addMenuItem(item) 
    {
         return this.httpService.post(environment.baseUrl + constant.api.menu, item);
     }
    getMenu() {
        return this.httpService.get(environment.baseUrl + constant.api.menu);
    }
    // deleteMenuItem(item){
    //     return this.httpService.post(environment.baseUrl + constant.api.deleteOne, item);
    // }
}
