import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent {
  employeeList:any;
  count!:number;
  
  constructor(private servEmp:EmployeeService,private serv:SharedService){}
  getEmployee(){
   this.servEmp.getEmployee().subscribe(res=>{
    this.employeeList=res
   })
  }

  ngOnInit(){
    this.getEmployee()
      this.count=this.serv.employeeCount
    }
  }

