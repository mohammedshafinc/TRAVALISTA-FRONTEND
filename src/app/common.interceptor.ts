import { Injectable } from "@angular/core";
import { HttpEvent,HttpInterceptor,HttpHandler,HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { UserDAtaService } from "./services/userData.service";

@Injectable()

export class CommonInterceptor implements HttpInterceptor{

    constructor(){}
    intercept(req: HttpRequest<any>, 
        next: HttpHandler): Observable<HttpEvent<any>> {


            // add autherisation toke if token available
            const token = localStorage.getItem('token')
            
            console.log(token);
            

        // clone the request to make modification without affecting the original request
        const cloneReq = req.clone({
            // modify headers
            setHeaders:{
                authorization : `Bearer ${token}`
            }
        }) 
        console.log(cloneReq)
        return next.handle(cloneReq)
    }
}