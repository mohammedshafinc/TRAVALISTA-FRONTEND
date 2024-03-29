import { Component, OnInit } from '@angular/core';
import { SignupService } from './services/signup.service';
import { UserDAtaService } from './services/userData.service';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent  {

  title = 'travalista';

  fulldata: any;
  isAdminRoute = false;

  constructor(
    private router: Router,
    private userdata: UserDAtaService,
    private signser: SignupService
  ) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.isAdminRoute = this.router.url.startsWith('/admin'); // Adjust path as needed
      });
  }
    ngOnInit(){
      this.signser.type = this.signser.tokendecode()
    }



}
