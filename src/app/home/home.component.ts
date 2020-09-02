import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isUserAuthenticated: boolean;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.authService.isAuthenticated().then(
      (authenticated: boolean) => this.isUserAuthenticated = authenticated
    );
  }

  onLoadServer(id: number) {
    // some logic/calculation that need to be executed before navigation
    this.router.navigate(['/servers', id, 'edit'], {queryParams: {allowEdit: '1'}, fragment: 'loading'});
  }

  onLogin() {
    this.authService.login();
    this.isUserAuthenticated = true;
  }

  onLogout() {
    this.authService.logout();
    this.isUserAuthenticated = false;
  }
}
