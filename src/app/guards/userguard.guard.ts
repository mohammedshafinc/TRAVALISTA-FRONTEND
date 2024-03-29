import { inject } from "@angular/core";
import { UserDAtaService } from "../services/userData.service";
import { SignupService } from "../services/signup.service";
import { Router } from "@angular/router";


export const userCanActivate = () => {
    const userdata = inject(UserDAtaService)
    const singserv = inject(SignupService)
    const router = inject(Router)
    console.log(singserv.type);
    
    if (userdata.isLoggedIn() && singserv.type.type === 'user') {
      console.log('user');
      
        return true;
      }else if ( userdata.isLoggedIn() && singserv.type.type == 'admin'){
      console.log('admin');

        router.navigateByUrl('/userlogin')
      } 
      else if (!userdata.isLoggedIn()) {
      console.log('jhsgdfjh');

        router.navigateByUrl('/userlogin');
      
      }
      return false
}