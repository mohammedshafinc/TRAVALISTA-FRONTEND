import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {loginData} from '../model/userlogin'
const headersContent = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  constructor(private http: HttpClient) {}


  isAuthenticated:boolean=false

  isLogin(){
    this.isAuthenticated = true
  }

  private Api = 'http://localhost:5050/usersignup';

  private otpApi = 'http://localhost:5050/verifyotp';

  private usrloginApi = 'http://localhost:5050/userlogin ';
  
  private getUser = 'http://localhost:5050/getprofile'

  

 

  apiCall(data: any): Observable<any> {
    return this.http.post(this.Api, data, headersContent);
  }

  veriftOtp(data:any):Observable<any>{
    return this.http.post(this.otpApi,data)
  }
  
  userLoginApi(data:loginData):Observable<any>{
    return this.http.post(this.usrloginApi,data);
  }

  getuser():Observable<any>{
    return this.http.get<any>(this.getUser)
  }

  
}
