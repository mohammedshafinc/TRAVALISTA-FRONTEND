import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {loginData} from '../model/userlogin'
import { environment } from 'src/environments/environment.prod';
const headersContent = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  constructor(private http: HttpClient) {}
  type: any


  isAuthenticated:boolean=false

  isLogin(){
    this.isAuthenticated = true
  }

  private Api =  `${environment.userapi}/usersignup` ;

  private otpApi =  `${environment.userapi}/verifyotp` ;

  private usrloginApi =  `${environment.userapi}/userlogin`  ;
  
  private getUser = ` ${environment.userapi}/getprofile `;

  private editUser = `${environment.userapi}/updateprofile` 

  

 

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

  userupdate(data:any, id:any):Observable<any>{
 
    const updateUser = `${this.editUser}/${id}`
    return this.http.post(updateUser,data)
  }

  getusertype(){
   const usertype = localStorage.getItem('type')
   if(usertype == 'user'){
    return true
   } else {
    return false
   }

  }

  tokendecode(){
    const token = localStorage.getItem('token')
    if (!token) {
      return
    }

    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-','+').replace('_','/');
    return JSON.parse(window.atob(base64))
  }

  
}
