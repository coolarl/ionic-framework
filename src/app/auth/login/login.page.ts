import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  form = {
    email: '',
    password: '',
  };
  constructor(private router: Router) {}

  ngOnInit() {}

  onSubmit() {
    localStorage.setItem('email', this.form.email);
    localStorage.setItem('password', this.form.password);

    console.log('email : ' + this.form.email);
    console.log('password : ' + this.form.password);
    this.router.navigate(['/home']);
  }
}
