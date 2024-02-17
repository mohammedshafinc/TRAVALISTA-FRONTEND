import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserDAtaService {
 
  // data 1
  private dataSubject = new BehaviorSubject<any>(null); //initial value an be object
  sharedData$ = this.dataSubject.asObservable(); //expose the observable

  // data 2
  private userData = new BehaviorSubject<any>(null)
  userData2$ = this.userData.asObservable()

  // methods to update data

  setData(data: any): void {
    this.dataSubject.next(data);
  }

  setUserDetails(userDetails:any):void {
    
    this.userData.next(userDetails)
  }
 

  getToken() {
    return localStorage.getItem('token');
  }
}
