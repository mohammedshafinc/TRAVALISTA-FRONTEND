import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guidesignup',
  templateUrl: './guidesignup.component.html',
  styleUrls: ['./guidesignup.component.scss']
})
export class GuidesignupComponent  {
  
 validate(val: number) {
  const v1 = document.getElementById("fname") as HTMLInputElement;
  const v2 = document.getElementById("lname") as HTMLInputElement;
  const v3 = document.getElementById("email") as HTMLInputElement;
  const v4 = document.getElementById("mob") as HTMLInputElement;
  const v5 = document.getElementById("job") as HTMLInputElement;
  const v6 = document.getElementById("ans") as HTMLInputElement;

    const flag1 = true;
    const flag2 = true;
    const flag3 = true;
    const flag4 = true;
    const flag5 = true;
    const flag6 = true;

    if(val>=1 || val==0) {
        if(v1.value == "") {
            v1.style.borderColor = "red";
            const flag1 = false;
        }
        else {
            v1.style.borderColor = "green";
            const flag1 = true;
        }
    }

    if(val>=2 || val==0) {
        if(v2.value == "") {
            v2.style.borderColor = "red";
            const flag2 = false;
        }
        else {
            v2.style.borderColor = "green";
            const flag2 = true;
        }
    }
    if(val>=3 || val==0) {
        if(v3.value == "") {
            v3.style.borderColor = "red";
            const flag3 = false;
        }
        else {
            v3.style.borderColor = "green";
            const flag3 = true;
        }
    }
    if(val>=4 || val==0) {
        if(v4.value == "") {
            v4.style.borderColor = "red";
            const flag4 = false;
        }
        else {
            v4.style.borderColor = "green";
            const flag4 = true;
        }
    }
    if(val>=5 || val==0) {
        if(v5.value == "") {
            v5.style.borderColor = "red";
            const flag5 = false;
        }
        else {
            v5.style.borderColor = "green";
            const flag5 = true;
        }
    }
    if(val>=6 || val==0) {
        if(v6.value == "") {
            v6.style.borderColor = "red";
            const flag6 = false;
        }
        else {
            v6.style.borderColor = "green";
            const flag6 = true;
        }
    }

    const  flag = flag1 && flag2 && flag3 && flag4 && flag5 && flag6;

    return flag;
}

}
