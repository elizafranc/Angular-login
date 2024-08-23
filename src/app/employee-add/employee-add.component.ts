import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent {
  
  count!:number;

  constructor(private form:FormBuilder,private servemp:EmployeeService,private serv:SharedService){}

  employeeForm=this.form.group({
    name:["",[Validators.required]],
    email:["",[Validators.required,Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$")]],
    Phone_number:["",[Validators.required]],
    designation:["",[Validators.required]],
    dob:["",[Validators.required]],
    gender:["",[Validators.required]],
    password:["",[Validators.required]]
  })
  

  employeeSave(){
    console.log(this.employeeForm.value)
    this.servemp.postEmployee(this.employeeForm.value).subscribe(res=>{
      console.log(res);
      alert("Employee details added")
  })
  }

  ngOnInit(){
    this.count=this.serv.employeeCount
  }

}

