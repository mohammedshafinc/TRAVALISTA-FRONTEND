import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn:'root'
})

export class UserDAtaService{
    private dataSubject = new BehaviorSubject<any>(null) //initial value an be object
    sharedData = this.dataSubject.asObservable() //expose the observable

    // methods to update data

    setData(data:any) :void{
        this.dataSubject.next(data)
    }


    getToken(){
        return localStorage.getItem('token')
    }

    
}