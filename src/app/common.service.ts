import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http:HttpClient) { }

  api = 'http://localhost:5050/user'

apiCall():Observable<any>{
  return this.http.get(this.api)
  
}


}
