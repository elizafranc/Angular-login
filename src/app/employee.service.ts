import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  mainurl='https://deserted-sedate-drop.glitch.me/';
  loginurl='https://deserted-sedate-drop.glitch.me/login';

  constructor(private http:HttpClient) {

   }

  getEmployee()
  {
      return this.http.get<any>(this.mainurl+'items');
  }

  postEmployee(employee:any)
  {
    return this.http.post<any>(this.mainurl+'items',employee);
  }

  getsingleEmployee(id:string)
  {
    return this.http.get<any>(this.mainurl+'items'+'/'+id);
  }

  updateEmployee(employee:any,id:string)
  {
    return this.http.put<any>(this.mainurl+'items/'+id,employee);
  }

  deleteEmployee(id:string)
  {
     return this.http.delete<any>(this.mainurl+'items/'+id);
  }

  postLogin(employee:any)
  {
    return this.http.post<any>(this.loginurl+'items',employee);
  }

}
