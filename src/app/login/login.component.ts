import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm = {
    email: '',
    password: '',
  };

  constructor(private authService: AuthService) {}

  loginSubmit() {
    const { email, password } = this.loginForm;
    this.authService.login({ email, password });
  }
  
}
