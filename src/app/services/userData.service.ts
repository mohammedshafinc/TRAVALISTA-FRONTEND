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
  userData2$ = new BehaviorSubject<any>(null);

  //  behaviour subbject 2
  userData3$ = new BehaviorSubject<any>(null);

  // methods to update data

  setData(data: any): void {
    this.dataSubject.next(data);
  }

  setUserDetails(userDetails: any): void {
    this.userData2$.next(userDetails);
  }

  getToken() {
    return localStorage.getItem('token');
  }
  guidedata(userDetails:any): void{
    this.userData3$.next(userDetails)

  }
}
