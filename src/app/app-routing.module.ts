import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';
import { AuthGuard } from './auth.guard';
import { ProfileComponent } from './employee-profile/profile/profile.component';
import { LeaveComponent } from './employee-profile/leave/leave.component';
import { PayrollComponent } from './employee-profile/payroll/payroll.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },

  {
    path:'employee',
    component:EmployeeComponent
  },

  {
    path:'employee-add',
    component:EmployeeAddComponent
  },

  {
    path:'employee-edit/:id',
    component:EmployeeEditComponent
  },
  
  {
    path:'employee-detail',
    component:EmployeeDetailComponent
  },

  {
    path:'employee-login',
    component:EmployeeLoginComponent
  },

  {
    path:'employee-profile',
    component:EmployeeProfileComponent,
    canActivate:[AuthGuard],
    children:[
      {
        path:'',
        component:ProfileComponent
      },
      {
        path:'leave',
        component:LeaveComponent
      },
      {
        path:'payroll',
        component:PayrollComponent
      }
    ]
  }


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
