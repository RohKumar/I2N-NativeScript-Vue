import * as http from 'tns-core-modules/http'
export default class HttpService {
    get(url) {
        let headers = this.createRequestHeader();
        return http.request({
            url,
            method: "GET",
            headers
          });
    }
    post(url,data) {
        console.log(url)
        let headers = this.createRequestHeader();
        return http.request({
            url,
            method: "POST",
            content: JSON.stringify(data),
            headers
          });
    }
    createRequestHeader() {
        // set headers here e.g.
        let headers ={
           // "AuthKey": "my-key",
           // "AuthToken": "my-token",
            "Content-Type": "application/json",
        };
        return headers;
    }
}