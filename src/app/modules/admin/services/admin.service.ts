import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private http: HttpClient) {}
  guideStatus = `${environment.userapi}/admin/getpendingguide`;
  adminRespose = `${environment.userapi}/admin/adminresponse`;
  getAllGuide = `${environment.userapi}/admin/getguides`;
  getAllusers = `${environment.userapi}/admin/getusers`;
  blockGuides = `${environment.userapi}/admin/blockstatus`;
  getBlockedGuides = `${environment.userapi}/admin/blocekdguides`;
  getBlockedUsers = `${environment.userapi}/admin/blocekdusers`;
  blockedUser = `${environment.userapi}/admin/userblock`

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
