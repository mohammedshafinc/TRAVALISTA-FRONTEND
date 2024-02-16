import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private userData: UserDAtaService
  ) {}

  userDetails: any;
  

  redirectToRegister() {
    this.router.navigateByUrl('/userregistration');
  }
  redirectToLogin() {
    this.router.navigateByUrl('/userlogin');
  }

  ngOnInit(): void {
    this.userData.userData2$.subscribe((data)=>{
      try{

        
        this.userDetails = data
        console.log('userdata',data);
        
      }catch(err){
        console.log('error in get user' ,err);
        
      }
    })
  }
}
