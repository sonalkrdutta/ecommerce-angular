import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, RequiredValidator } from '@angular/forms';
import { Router } from '@angular/router';
import { UloginService } from './ulogin.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
    // emailpattern="^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$";
  //  pwdPattern = "^[a-zA-Z]\w{3,14}$";
  responsedata: any

  constructor(private formBuilder: FormBuilder, private loginservice: UloginService, private route:Router) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    });
  }
  loginData(data: any) {
    console.log(data)
    this.loginservice.Getdata(data).subscribe(res=> {
      this.responsedata=res
      if (this.responsedata.status==200){
        this.route.navigate(["/database"])
      }
      else if(this.responsedata.status== 401){
        alert("Your Email/Password is Incorrect..!!")
      }
    });
  }


  ngOnInit(): void {
  }
}
