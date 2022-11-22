import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  baseURL: string = "http://127.0.0.1:8000/api/";
  constructor(private http: HttpClient) { }

  login(): Observable<any> {
    return this.http.get(this.baseURL + 'login/')
  }
}
