import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserDAtaService {

  constructor( private router :Router){}
  // data 1
  private dataSubject = new BehaviorSubject<any>(null); //initial value an be object
  sharedData$ = this.dataSubject.asObservable(); //expose the observable

  // data 2
  userData2$ = new BehaviorSubject<any>(null);

  //  behaviour subbject 2
  userData3$ = new BehaviorSubject<any>(null);

  loader$ = new BehaviorSubject<any>(false);


  setLoader(data:any):void {
    this.loader$.next(data)
  }

  // methods to update data

  setData(data: any): void {
    this.dataSubject.next(data);
  }

  setUserDetails(userDetails: any): void {
    this.userData2$.next(userDetails);
  }

  isLoggedIn() {
    const token =  localStorage.getItem('token');
    return !!token

  }

  isLogout(){
    localStorage.clear()
    this.router.navigateByUrl('userlogin')
    
  }


  guidedata(userDetails:any): void{
    this.userData3$.next(userDetails)

  }
}
