import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string ='';
  password: string ='';

  constructor(private router: Router) {}

  login(): void {
    // Perform login logic here, e.g., authenticate user

    // Redirect to the main page upon successful login
    this.router.navigate(['/main']);
  }
}