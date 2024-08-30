import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  setSession(key:string , value:string) 
  {
    localStorage.setItem(key,value);
  }

  getSession(key:string)
  {
    localStorage.getItem(key);
  }
}
