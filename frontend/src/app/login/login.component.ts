import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @Input() user: User = new User();
  logged: boolean = false;
  router: any;

  constructor(private LoginService: LoginService) {}

  ngOnInit(): void {}

  login(user: User) {
    this.LoginService.login(user).subscribe({
      next: (resp: boolean) => {
        this.logged == resp;
        console.log(resp);
        console.log(resp ? 'Login...' : 'Credenciais Incorretas' );
      },
      error: (error) => console.error(error),
      complete: () => {
      },
    });
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
