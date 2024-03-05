import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
    providedIn:'root'
})
export class GuidedataService{
    constructor(private router:Router){}


    isLogout(){
        localStorage.clear()
        this.router.navigateByUrl('/guide/guidelogin')
    }
}