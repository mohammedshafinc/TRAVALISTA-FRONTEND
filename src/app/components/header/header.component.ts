import {
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Router } from '@angular/router';
import { GuidedataService } from 'src/app/modules/guide/services/guidedata.service';
import { GuideService } from 'src/app/services/guide.service';
import { SignupService } from 'src/app/services/signup.service';
import { UserDAtaService } from 'src/app/services/userData.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(
    private router: Router,
    private singser: SignupService,
    private userData: UserDAtaService,
    private guideservice:GuideService
  ) {}

  userDetails: any;
  value: any;
  name = '';

  ngOnInit(): void {
  
    // // find user
    if(this.isLoggedIn()){
      this.singser.getuser().subscribe({
        next: (data) => {
        
          // console.log(data);
          console.log(data.fullname);
          this.value = data.fullname;
          console.log(data);
          
        },
        error:(error)=>{
          console.log( 'error in header', error);
          
        }
      });
    }

        // find guid
        
    
    
  }

  userProfile() {
    console.log('navigated to profile');
    this.router.navigateByUrl('/user/usrprofileupdate');
  }

  redirectToRegister() {
    this.router.navigateByUrl('/userregistration');
  }
  redirectToLogin() {
    this.router.navigateByUrl('/userlogin');
  }
  redirectoGuideRegister() {
    this.router.navigateByUrl('/guidelogin');
  }

  isLoggedIn() {
    return !!localStorage.getItem('token');
  }

  logout() {
    localStorage.clear()
    this.userDetails = null;
    this.router.navigateByUrl('/userlogin');
  }
}
