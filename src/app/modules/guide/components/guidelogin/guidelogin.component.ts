import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GuideService } from 'src/app/services/guide.service';

@Component({
  selector: 'app-guidelogin',
  templateUrl: './guidelogin.component.html',
  styleUrls: ['./guidelogin.component.scss'],
})
export class GuideloginComponent implements OnInit {
  guidelogin!: FormGroup;
  visible: boolean = true;
  changetype: boolean = true;
  errmsg = ''

  constructor(private fb: FormBuilder, private router: Router, private guideservice:GuideService) {}
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
    this.router.navigateByUrl('/guide/guidehome');
  }

  onsubmit(){
    console.log(this.guidelogin.value);
    
    try {
      this.guideservice.login(this.guidelogin.value).subscribe({
        next:(data)=>{
          localStorage.setItem('token',data.token)
          localStorage.getItem('token')
          localStorage.setItem('type',data.type)
          
          console.log('data', data);
        
          
          this.navigateToGuideHome()
          
        },
        error:(error)=>{
          console.log('error',error );
          this.errmsg  = error.error.message;
          
          
        }
      })
    } catch (error) {
      console.log('error in login' , error);
      
    }
  }

  viewPass() {
    this.visible = !this.visible;
    this.changetype = !this.changetype;
  }
}
