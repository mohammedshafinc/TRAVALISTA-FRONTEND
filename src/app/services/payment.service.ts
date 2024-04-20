import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment.prod";

@Injectable({
    providedIn:'root'
})
export class PaymentService {

    constructor( private http:HttpClient){}

    createOrderApi = `${environment.userapi}/createorder`
    paymentSuccessApi = `${environment.userapi}/paymentsuccess`
    bookedpackageApi = `${environment.userapi}/bookedpackages
`

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