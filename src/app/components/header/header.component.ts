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
  redirectoGuideRegister(){
    this.router.navigate(['guide','guideregister'])
  }

  ngOnInit(): void {
    this.userData.userData2$.subscribe((data)=>{
      try{

        if(data){

          this.userDetails = data
          console.log('userdata form header',data);
        }
        
      }catch(err){
        console.log('error in get user' ,err);
        
      }
    })
   
  
   
      if(this.userData.getToken()){
  
        this.singser.getuser().subscribe({
          next: (data) => {
            // this.userData.setUserDetails(data);
            console.log('data get in app' ,data);
            
          },
          error: (error) => {
            console.error('Error fetching user data:', error);
          },
        });
      }else{
        console.log('no token');
        
      }
    

  }
  isLoggedIn(){
    return this.userDetails &&this.userDetails.token
  }
  
  
     
  
}
