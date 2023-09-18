import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  isAuthenticated: any;

  authenticated: boolean = false;

  constructor(private authService: AuthService) {
    this.authService.isAuthenticated$.subscribe((isAuthenticated) => {
      this.authenticated = isAuthenticated;
    });
  }

  logout() {
    this.authService.logout();
  }

  ngOnInit(): void {}
}
