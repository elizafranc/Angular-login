import { Component } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  profile: any;

  constructor(private empserv: EmployeeService) {}

  ngOnInit():void
  {
    this.empserv.getProfile().subscribe(res=>{
        this.profile = res;
        console.log(this.profile);
      },
      error => {
        console.error('Error fetching profile', error);
      }
    );
  }
}
