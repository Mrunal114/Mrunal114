import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environment';

@Injectable({
  providedIn: 'root'
})
export class CustgroupService {
private baseUrl = environment.apiUrl;
  constructor(private http:HttpClient) {}

  insertCustGroup(endpoint:string,data:any): Observable<any> {
    return this.http.post(`${this.baseUrl}/${endpoint}`,data);
  }

  getCustGroup(endpoint:string,params:any): Observable<any> {
    let httpParams = new HttpParams();

  for (const key in params) {
    if (params.hasOwnProperty(key)) {
      httpParams = httpParams.append(key, params[key]);
    }
  }

    return this.http.get(`${this.baseUrl}/${endpoint}`,{params: httpParams});
  }
}
