import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class GuideService{
    constructor(private http:HttpClient){}

    guideRegApi = 'http://localhost:5050/guide/guideregister'


    guidereg (data:any):Observable<any>{
        return this.http.post(this.guideRegApi,data)
    }
}