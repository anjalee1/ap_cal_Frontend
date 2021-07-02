import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Values } from './request';
import { Result } from './response';

@Injectable({
  providedIn: 'root'
})
export class CalserveService {

  constructor(private http: HttpClient) { }

  sendValues(values:Values): Observable<any> {
    
    return this.http.post<Result>('http://localhost:8080',values);
  }

  

}


