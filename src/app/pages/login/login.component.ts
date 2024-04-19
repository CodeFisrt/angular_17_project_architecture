import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  login: any = {
    username: '',
    password: ''
  }

  constructor(private router:Router) {}

  onLogin() {
    if(this.login.username =='admin' && this.login.password == '112233') {
      localStorage.setItem('EcomUser',this.login.username);
      this.router.navigateByUrl('dashboard')
    } else {
      alert('wrong credentials')
    }
  }
}
