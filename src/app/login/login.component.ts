import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 
  details: string = 'Details';
  studentName: string = ''; // Holds the student's name entered by the user
  // studentNo: string ='';

  onStudentNameChange(event: Event): void {
    this.studentName = (event.target as HTMLInputElement).value;
  }
}
