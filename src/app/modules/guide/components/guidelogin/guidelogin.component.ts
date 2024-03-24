import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GuideService } from 'src/app/services/guide.service';
import { SignupService } from 'src/app/services/signup.service';

@Component({
  selector: 'app-guidelogin',
  templateUrl: './guidelogin.component.html',
  styleUrls: ['./guidelogin.component.scss'],
})
export class GuideloginComponent implements OnInit {
  guidelogin!: FormGroup;
  visible: boolean = true;
  changetype: boolean = true;
  errmsg = '';
  guideId: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private guideservice: GuideService,
    private signser: SignupService
  ) {}
  ngOnInit(): void {
    this.guidelogin = this.fb.group({
      email: ['', Validators.required],
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
    return this.guidelogin.controls;
  }

  navigateToGuideHome() {
    console.log('lkkjsfkjh');

    this.router.navigateByUrl(`/guide/guidehome/${this.guideId}`);
  }

  onsubmit() {
    console.log(this.guidelogin.value);

    try {
      this.guideservice.login(this.guidelogin.value).subscribe({
        next: (data) => {
          
         if(data.guide){
          console.log(data.guideId);
          this.guideId = data.guideId;

          localStorage.setItem('token', data.token);
          this.signser.type = this.signser.tokendecode();
          localStorage.getItem('token');

          console.log('data', data);

          this.navigateToGuideHome();
          console.log('navigatedtohome');
          
         }
        },
        error: (error) => {
          console.log('error', error);
          this.errmsg = error.error.message;
        },
      });
    } catch (error) {
      console.log('error in login', error);
    }
  }

  viewPass() {
    this.visible = !this.visible;
    this.changetype = !this.changetype;
  }
}
