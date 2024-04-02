import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PackageService {
  constructor(private http: HttpClient) {}

  packageShow = 'http://localhost:5050/admin/showpackages';
  selectedPackage = 'http://localhost:5050/guide/selectedpackage';
  guidepackageupdate = 'http://localhost:5050/guide/guidepackageupdate'

  getPackageshow(id: any): Observable<any> {
    const showPackages = `${this.packageShow}/${id}`;
    return this.http.get(showPackages);
  }

  getSelectedPackage(id: any): Observable<any> {
    // console.log(id);
    const selectedPacakges = `${this.selectedPackage}/${id}`;

    return this.http.get(selectedPacakges);
  }

  packageupdate(data:any, id:any):Observable<any> {
    const updatePackage = `${this.guidepackageupdate}/${id}`
    return this.http.patch(updatePackage, data)
  }
}
