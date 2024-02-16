import { Component } from '@angular/core';
import { SignupService } from './services/signup.service';
import { UserDAtaService } from './services/userData.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'travalista';

  constructor(
    private singser: SignupService,
    private userDataService: UserDAtaService
  ) {}

  ngOnInit(): void {
    this.singser.getuser().subscribe({
      next: (data) => {
        this.userDataService.setUserDetails(data);
        console.log('data get' ,data);
        
      },
      error: (error) => {
        console.error('Error fetching user data:', error);
      },
    });
  }
}
