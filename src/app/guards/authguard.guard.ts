import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { UserDAtaService } from '../services/userData.service';
import { SignupService } from '../services/signup.service';
import { GuidedataService } from '../modules/guide/services/guidedata.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate{
  constructor(private userdata:UserDAtaService , private signserv:SignupService, private guideservice :GuidedataService , private router:Router){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
      
  
      if(this.userdata.isLoggedIn() && this.signserv.getusertype()){
        console.log('user');
        
        return true

      } else if(this.userdata.isLoggedIn() && this.guideservice.getGuideType()){
       
        return true
       

      } else {
        return false
      }
      return false
  }

}
  

 

