import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GuideService {
  constructor(private http: HttpClient) {}

  guidelogin = 'http://localhost:5050/guide/guidelogin';
  guideRegApi = 'http://localhost:5050/guide/guideregister';
  guideVerifyOtp = 'http://localhost:5050/guide/guideotpverify';
  guideprofileApi = 'http://localhost:5050/guide/guideprofile';
  guideprofileUpdateApi = 'http://localhost:5050/guide/guideprofileupdate';
  guidePackageAdd = 'http://localhost:5050/guide/guideaddpackages';

  guidereg(data: any): Observable<any> {
    return this.http.post(this.guideRegApi, data);
  }

  otpverify(data: any): Observable<any> {
    console.log('kinashe');
    
    return this.http.post(this.guideVerifyOtp, data);
  }

  login(data: any): Observable<any> {
    return this.http.post(this.guidelogin, data);
  }

  guideprofile(): Observable<any> {
    return this.http.get<any>(this.guideprofileApi);
  }

  guideprofileupdate(data:any,id:any):Observable<any>{
    const guideUpdate = `${this.guideprofileUpdateApi}/${id}`
    return this.http.patch(guideUpdate,data)
  }

  guidepackagedd(data:any):Observable<any> {
    return this.http.post(this.guidePackageAdd,data)
  }


}
