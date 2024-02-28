import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class GuideService{
    constructor(private http:HttpClient){}

    guideRegApi = 'http://localhost:5050/guide/guideregister'
    guideVerifyOtp = 'http://localhost:5050/guide/guideotpverify'



    guidereg (data:any):Observable<any>{
        return this.http.post(this.guideRegApi,data)
    }

    otpverify(data:any):Observable<any>{
        return this.http.post(this.guideVerifyOtp,data)
    }
}