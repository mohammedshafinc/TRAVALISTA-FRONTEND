import { inject } from '@angular/core';
import { UserDAtaService } from '../services/userData.service';
import { SignupService } from '../services/signup.service';
import { Router } from '@angular/router';

export const adminCanActivate = () => {
  const userdata = inject(UserDAtaService);
  const singserv = inject(SignupService);
  const router = inject(Router);
  if (userdata.isLoggedIn() && singserv.type.type === 'admin') {
    console.log('hlo');

    return true;
  } else if (!userdata.isLoggedIn()) {
    router.navigateByUrl('/userlogin');
  }
  return false;
};
