import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  public isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  constructor(private http: HttpClient, private router: Router) {}

  signup(user: any) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http
      .post(
        'https://api.escuelajs.co/api/v1/users/',
        {
          name: user.name,
          email: user.email,
          password: user.password,
          avatar: user.avatar,
        },
        { headers }
      )
      .subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  login(login: any) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.http
      .post(
        'https://api.escuelajs.co/api/v1/auth/login',
        {
          email: login.email,
          password: login.password,
        },
        { headers }
      )
      .subscribe(
        (response: any) => {
          if (response && response.access_token) {
            localStorage.setItem('isAuthenticated', 'true');
            this.router.navigate(['/products']);
            this.isAuthenticatedSubject.next(true);
            return true;
          }
          return false;
        },
        (error) => {
          console.log(error);
        }
      );
  }

  logout() {
    this.isAuthenticatedSubject.next(false);
  }
}
