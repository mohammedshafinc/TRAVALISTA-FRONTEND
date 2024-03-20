import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private http: HttpClient) {}

  guideStatus = 'http://localhost:5050/admin/getpendingguide';
  adminRespose = 'http://localhost:5050/admin/adminresponse';
  getAllGuide = 'http://localhost:5050/admin/getguides';
  getAllusers = 'http://localhost:5050/admin/getusers';
  blockGuides = 'http://localhost:5050/admin/blockstatus';
  getBlockedGuides = 'http://localhost:5050/admin/blocekdguides';
  getBlockedUsers = 'http://localhost:5050/admin/blocekdusers';
  blockedUser = 'http://localhost:5050/admin/userblock'

  guidePendingStatus(): Observable<any> {
    return this.http.get<any>(this.guideStatus);
  }

  adminResponseStatus(id: any, status: String): Observable<any> {

    const statusUpdate = `${this.adminRespose}/${id}`;
    const body = { status };

    return this.http.patch(statusUpdate, body);
  }

  getGuides():Observable<any> {
    return this.http.get(this.getAllGuide)
  }

  getUsers():Observable<any> {
    return this.http.get(this.getAllusers)
  }

  blockGuide(id:any, blockstatus:any):Observable<any> {
    const url = `${this.blockGuides}/${id}`
    const body = { blockstatus }
    return this.http.patch(url, body)
  }
  getAllBlockedGuide():Observable<any> {
    return this.http.get(this.getBlockedGuides)
  }
  getAllBlockedUser():Observable<any> {
    return this.http.get(this.getBlockedUsers)
  }
  blockUser(id:any, blockstatus:any):Observable<any> {

    const url = `${this.blockedUser}/${id}`
    console.log(url);
    
    const body = { blockstatus}
    console.log(blockstatus);
    
    return this.http.patch(url, body)
  }
}
