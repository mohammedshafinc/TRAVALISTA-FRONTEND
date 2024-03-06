import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class GuidedataService {
  constructor(private router: Router) {}

  isLogout() {
    localStorage.clear();
    this.router.navigateByUrl('/guide/guidelogin');
  }
  getGuideType() {
    const guideType = localStorage.getItem('type');
    if (guideType == 'guide') {
      return true;
    } else {
      return false;
    }
  }
}
