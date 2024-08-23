import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent {
  
  count!:number;
  id!:string;
  employeeData={name:"",email:"",Phone_number:"",designation:"",dob:"",gender:""};

  employeeForm=this.form.group({
    name:["",[Validators.required]],
    email:["",[Validators.required,Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$")]],
    Phone_number:["",[Validators.required]],
    designation:["",[Validators.required]],
    dob:["",[Validators.required]],
    gender:["",[Validators.required]]
  })

 
  constructor(private activeRoute:ActivatedRoute, private form:FormBuilder,private employee:EmployeeService, private serv:SharedService){}
  ngOnInit(){
   this.activeRoute.params.subscribe(params=>{
   this.id=params['id'];
   })
   this.getEmployee()
   this.count=this.serv.employeeCount
  }

  getEmployee()
  {
    this.employee.getsingleEmployee(this.id).subscribe(res=>{
      this.employeeData=res;
    })
  }
 
  employeeSave(){
    this,this.employee.updateEmployee(this.employeeForm.value,this.id).subscribe(res=>{
      alert("Employee details updated")
    })
  }



}
