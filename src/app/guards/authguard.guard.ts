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

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {}
  

 

