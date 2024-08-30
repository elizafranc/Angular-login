import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { SharedService } from '../shared.service';
import { SessionService } from '../session.service';
import { AuthguardService } from '../authguard.service';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent implements OnInit {

  loginForm = this.fb.group({
    username: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$")]],
    password: ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder,private logemp: EmployeeService,private serv: SharedService,private session:SessionService,private authServ:AuthguardService) {}

  ngOnInit()  {}

  loginSubmit() {
    if (this.loginForm.valid) {
      this.logemp.postLogin(this.loginForm.value).subscribe(res=> {
          if (res.message === "Login successful") {
            this.authServ.login();
            alert('Login successful!');
            this.session.setSession('token',res.token);
            this.loginForm.reset();
          } 
          else {
        
            alert('Login failed. Please check your email and password.');
          }
        })
      }
    }
}
