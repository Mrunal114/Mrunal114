import { Injectable } from '@angular/core';
import { environment } from '../../../environment';

import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlantService {
  private baseUrl = environment.apiUrl;
  constructor(private http:HttpClient) {}

  insertPlant(endpoint:string,data:any): Observable<any> {
    return this.http.post(`${this.baseUrl}/${endpoint}`,data);
  }

  updatePlant(endpoint: string, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${endpoint}`, data);
  }

  getPlant(endpoint:string,params:any): Observable<any> {
    let httpParams = new HttpParams();

  for (const key in params) {
    if (params.hasOwnProperty(key)) {
      httpParams = httpParams.append(key, params[key]);
    }
  }

    return this.http.get(`${this.baseUrl}/${endpoint}`,{params: httpParams});
  }
}
