import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class PaymentService {

    constructor( private http:HttpClient){}

    createOrderApi = 'http://localhost:5050/createorder'
    paymentSuccessApi = 'http://localhost:5050/paymentsuccess'
    bookedpackageApi = 'http://localhost:5050/bookedpackages'


    createOrder(amount:Number):Observable<any>{
        console.log(amount);
        
        return this.http.post(this.createOrderApi,{amount})
    }

    paymentSuccess(data:any,packageId:String):Observable<any>{
        return this.http.post(this.paymentSuccessApi,{data,packageId})
    }

    bookedPackages() :Observable<any>{
        return this.http.get(this.bookedpackageApi)
    }
    

}