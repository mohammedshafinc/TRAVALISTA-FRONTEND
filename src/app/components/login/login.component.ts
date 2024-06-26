import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { io } from 'socket.io-client';
import { ChatService } from 'src/app/services/chat.service';
import { SignupService } from 'src/app/services/signup.service';
import { UserDAtaService } from 'src/app/services/userData.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  visible: boolean = true;
  changetype: boolean = true;
  errmsg = '';
  sendId :any

  constructor(
    private signser: SignupService,
    private fb: FormBuilder,
    private router: Router,
    private userdata: UserDAtaService,
    private chatService:ChatService

  ) {}

  viewPass() {
    this.visible = !this.visible;
    this.changetype = !this.changetype;
  }

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
  redirectToHome() {
    this.router.navigateByUrl('/user');
  }
  redirectTAdminHome(){
    this.router.navigateByUrl('/admin')
  }

  onSubmit() {
    this.userdata.setLoader(true)
    try {
      this.signser.userLoginApi(this.loginForm.value).subscribe({
        next: (data: any) => {
          if (data.user) {
            console.log(data)
            console.log(data.token)
            console.log('user logged succesfully');
            // save the userdata for service
            this.userdata.setUserDetails(data);
            localStorage.setItem('token',data.token)
            this.signser.type = this.signser.tokendecode()
            this.sendId = this.signser.tokendecode()
            // this.connectSocket()
            console.log(this.signser.type);
    this.userdata.setLoader(false)

            this.redirectToHome();

           
          } else if (data.admin) {
            console.log(data.token);
            
            console.log('admin logged');
            localStorage.setItem('token',data.token)
            this.signser.type = this.signser.tokendecode()
            console.log(this.signser.type);
            this.redirectTAdminHome()
            console.log('redirectoadminhome');
            
          } else {
            console.log('not true');
          }
        },
        error: (error) => {
          console.log('user logged error', error);
        this.errmsg = error.error.message
        },
      });
    } catch (err) {
      console.log('error', err);
    }
  }

  connectSocket(){
    this.chatService.socket = io('http://localhost:3000', {
      auth: {
        userid:`${this.sendId.id}`,
      }
    })
  }
}
