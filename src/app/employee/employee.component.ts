import { Component, ElementRef, ViewChild } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
 
  @ViewChild('head') head!:ElementRef;

  employeeList!:any;
  count!:number;

  constructor(private employee:EmployeeService, private shareCount:SharedService){}

  getEmployee(){
    this.employee.getEmployee().subscribe(res=>{
      this.employeeList=res;
      this.count=this.shareCount.employeeCount=this.employeeList.length;
      console.log(this.employeeList)
    })
  }

  ngOnInit(){
    this.getEmployee();
  }
  
  deleteEmployee(id:string){
    this.employee.deleteEmployee(id).subscribe(res=>{
      alert("Employee Deleted")
      this.getEmployee()
    })
  }

  ngAfterViewInit(){
    this.head.nativeElement.textContent="changed text";
  }
}
