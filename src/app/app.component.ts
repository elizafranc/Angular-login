import { Component } from '@angular/core';
import { AuthguardService } from './authguard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project';
  
   constructor(private authServ:AuthguardService,private router:Router){}

  logout(){
    localStorage.clear();
    this.authServ.logout();
    this.router.navigate(['/employee-login']);
  }
}
