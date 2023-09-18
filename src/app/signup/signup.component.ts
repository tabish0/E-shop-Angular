import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  signupForm = { name: '', email: '', password: '', avatar: '' };

  constructor(private authService: AuthService) {}

  signupSubmit() {
    const { name, email, password, avatar } = this.signupForm;
    const newUser = {
      name: name,
      email: email,
      password: password,
      avatar: avatar,
      createdAt: Date.now().toString(),
      updatedAt: Date.now().toString(),
    };

    this.authService.signup(newUser);
  }
}
