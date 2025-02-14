import { Injectable } from '@angular/core';
import { environment } from '../../../environment';
import {  HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getUserDtls(username: string, password: string) {
    const url = `${this.baseUrl}/` + 'Loginctrl';
    return this.http.get<any[]>(url + "?Email=" + username + "&Password=" + password)
  }
}
