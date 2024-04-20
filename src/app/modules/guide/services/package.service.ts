import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class PackageService {
  constructor(private http: HttpClient) {}

  packageShow = `${environment.userapi}/admin/showpackages`;
  selectedPackage = `${environment.userapi}/guide/selectedpackage`;
  guidepackageupdate = `${environment.userapi}/guide/guidepackageupdate`
  deletePackageApi = `${environment.userapi}/guide/deletepackage`

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

  deletepackage(id:any):Observable<any>{
    const deletePackage = `${this.deletePackageApi}/${id}`
    return this.http.delete(deletePackage)
  }


}
