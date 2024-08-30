import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  mainurl='https://deserted-sedate-drop.glitch.me/';
  loginurl='https://deserted-sedate-drop.glitch.me/login';
  profileurl='https://deserted-sedate-drop.glitch.me/protected';

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
    return this.http.post<any>(this.loginurl,employee);
  }

  getProfile()
  {
    let token=localStorage.getItem('token');
    const headers=new HttpHeaders().set('x-access-token',token||'');
    return this.http.get<any>(this.profileurl,{headers});
  }

  }


