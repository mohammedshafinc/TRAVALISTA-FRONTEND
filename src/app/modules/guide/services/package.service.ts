import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({

    providedIn:'root'
})

export class PackageService {

    constructor( private http :HttpClient){}

    packageShow = 'http://localhost:5050/admin/showpackages'

    getPackageshow(id:any):Observable<any>{
        const showPackages = `${this.packageShow}/${id}`
        return this.http.get(showPackages)
    }

}