import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
 private baseUrl = environment.apiUrl;
  constructor(private http:HttpClient) {}

  insertCountry(endpoint:string,data:any): Observable<any> {
    return this.http.post(`${this.baseUrl}/${endpoint}`,data);
  }

  getCountry(endpoint:string,params:any): Observable<any> {
    let httpParams = new HttpParams();

  for (const key in params) {
    if (params.hasOwnProperty(key)) {
      httpParams = httpParams.append(key, params[key]);
    }
  }

    return this.http.get(`${this.baseUrl}/${endpoint}`,{params: httpParams});
  }
}
