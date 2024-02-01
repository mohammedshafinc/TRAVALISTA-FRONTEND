import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const headersContent = {

  headers : new HttpHeaders({'Content-Type': 'application/json'})
  
}

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http:HttpClient) { }


  private Api = 'http://localhost:5050/usersignup'
 

  apiCall(data:any):Observable<any>{
   
    
    return this.http.post(this.Api,data,headersContent)
  

  }
}
