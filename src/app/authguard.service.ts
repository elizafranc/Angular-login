import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService {
  
  isauthenticatedUser=false;

  login(){
    this.isauthenticatedUser=true;
  }

  logout(){
    this.isauthenticatedUser=false;
  }

  isAuthenticated(){
     return this.isauthenticatedUser;
  }
  constructor() { }
}
