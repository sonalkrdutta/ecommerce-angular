import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UloginService {

  constructor(private http: HttpClient) { }
  login(){
    alert("Login complete")
  }
  Getdata(data:any): Observable<any> {
    // const headers = new HttpHeaders({ 'content-type' : 'application/json'});
    //console.log(data)
    return this.http.post('http://localhost:5000/login',data);
  }
  DBdata(): Observable<any> {
    // const headers = new HttpHeaders({ 'content-type' : 'application/json'});

    return this.http.get('http://localhost:5000/data');
  }
}

