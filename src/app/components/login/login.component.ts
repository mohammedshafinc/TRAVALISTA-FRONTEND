import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from 'src/app/services/signup.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(
    private signser: SignupService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^(?=.*[a-z])(?=.*[A-Z])(?=.*[$@^!%*?&])(?=.*[0-7]).{8,}$'
          ),
          Validators.maxLength(8),
        ],
      ],
    });
  }
  get f() {
    return this.loginForm.controls;
  }
  redirectToHome(){
    this.router.navigateByUrl('')
  }

  onSubmit() {
    try {
      this.signser.userLoginApi(this.loginForm.value).subscribe({
        next: (data: string) => {
          console.log('data send succesfully', data);
          console.log('user logged succesfully');
          this.redirectToHome();
          console.log('navigated to home');
        },
        error: (error) => {
          console.log('user logged error', error);
        },
      });
    } catch (err) {
      console.log('error', err);
    }
  }
}
