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
}
