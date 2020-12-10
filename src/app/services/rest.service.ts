import { Injectable } from '@angular/core';

import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class RestService {

  private rootUrl: String = environment.apiUrl;
  constructor(private http: HttpClient, private router: Router) { }

  Post(method, data) {
    return this.http.post(this.rootUrl + "/" + method, data, this.getOptions());
  }

  Get(method) {
    return this.http.get<any>(this.rootUrl + "/" + method, this.getOptions());
  }

  GetParam(method, param) {
    return this.http.get<any>(this.rootUrl + "/" + method + "?" + param, this.getOptions());
  }

  Put(method, id, data) {
    return this.http.put(this.rootUrl + "/" + method + "/" + id,data,this.getOptions());
  }

  Delete(method) {
    return this.http.delete(this.rootUrl + "/" + method, this.getOptions());
  }

  private getOptions() {
    let headerObj = {};
    headerObj["Content-Type"] = "application/json";
    headerObj["withCredentials"] = true;
    let token = localStorage.getItem("token");
    if (token != null && token !== undefined) {
      headerObj["x-access-token"] = token;
    }

    let headers = new HttpHeaders(headerObj);
    return { headers: headers };
  }

}
