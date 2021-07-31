import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http:HttpClient) { }
  add_user(data: any): Observable<any> {
    // const headers = new HttpHeaders({ 'Content-Type': 'application/json'});
    // console.log(data);
    return this.http.post('http://localhost:5000/add',data);
  }
}
