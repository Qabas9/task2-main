import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from './login/login.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task2';
  name :any ;
  constructor(private router: Router){}

  GoToLogin(){
    this.router.navigate(['/login']);
  }

}
