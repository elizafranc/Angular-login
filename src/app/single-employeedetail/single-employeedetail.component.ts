import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-single-employeedetail',
  templateUrl: './single-employeedetail.component.html',
  styleUrls: ['./single-employeedetail.component.css']
})
export class SingleEmployeedetailComponent {
@Input() item:any
}
