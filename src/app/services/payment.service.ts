import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class PaymentService {

    constructor( private http:HttpClient){}

    createOrderApi = 'http://localhost:5050/createorder'
    paymentSuccessApi = 'http://localhost:5050/paymentsuccess'


    createOrder(amount:Number){
        console.log(amount);
        
        return this.http.post(this.createOrderApi,{amount})
    }

    paymentSuccess(data:any){
        return this.http.post(this.paymentSuccessApi,data)
    }
    

}