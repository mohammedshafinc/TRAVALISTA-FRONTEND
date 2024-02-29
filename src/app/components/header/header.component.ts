import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
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
  value:any ;
  name=''
  @Input() data:any
  
 
  


  ngOnInit(): void {
    if(this.isLoggedIn()){

      console.log(this.value)
      this.singser.getuser().subscribe({
  
        next:(data)=>{
          console.log(data);
          console.log(data.fullname);
          this.value = data.fullname
          
          
        }
      })
    }
      
  }
  

  userProfile(){
    console.log('navigated to profile');
    this.router.navigateByUrl('/user/usrprofileupdate');
    
  }

  redirectToRegister() {
    this.router.navigateByUrl('/userregistration');
  }
  redirectToLogin() {
    this.router.navigateByUrl('/userlogin');
  }
  redirectoGuideRegister(){
    this.router.navigate(['guide','guideregister'])
  }

 
  isLoggedIn(){
    return !! localStorage.getItem('token')
   
    
  }
  
  logout(){
    localStorage.removeItem('token')
    this.userDetails = null
    this.router.navigateByUrl('/userlogin')
  } 

 
     
  
}

