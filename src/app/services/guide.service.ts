import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GuideService {
  constructor(private http: HttpClient) {}

  guidelogin = `${environment.userapi}/guide/guidelogin`;
  guideRegApi = `${environment.userapi}/guide/guideregister`;
  guideVerifyOtp = `${environment.userapi}/guide/guideotpverify`;
  guideprofileApi = `${environment.userapi}/guide/guideprofile`;
  guideprofileUpdateApi =` ${environment.userapi}/guide/guideprofileupdate`;
  guidePackageAdd = `${environment.userapi}/guide/guideaddpackages`;
  getPackage =` ${environment.userapi}/guide/getpackages`;

  guidereg(data: any): Observable<any> {
    return this.http.post(this.guideRegApi, data);
  }

  otpverify(data: any): Observable<any> {
    return this.http.post(this.guideVerifyOtp, data);
  }

  login(data: any): Observable<any> {
    return this.http.post(this.guidelogin, data);
  }

  guideprofile(): Observable<any> {
    return this.http.get<any>(this.guideprofileApi);
  }

  guideprofileupdate(data: any, id: any): Observable<any> {
    const guideUpdate = `${this.guideprofileUpdateApi}/${id}`;
    console.log(data);

    return this.http.patch(guideUpdate, data);
  }

  guidepackagedd(data: any): Observable<any> {
    return this.http.post(this.guidePackageAdd, data);
  }

  guideGetPackage(guideId: any): Observable<any> {
    console.log(guideId);
    
    const getPackages = `${this.getPackage}/${guideId}`;
    return this.http.get<any>(getPackages);
  }

  SingleGuide(guideid:any):Observable<any> {
    console.log(guideid);
    
    return this.http.get(`${environment.userapi}/guide/singleguide/${guideid}`)
  }

  singleUser(userId:any):Observable<any> {
    console.log('haaai');
    
    return this.http.get(`${environment.userapi}/guide/singleuser/${userId}`)
  }
}
