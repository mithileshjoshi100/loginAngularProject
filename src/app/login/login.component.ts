import { Component } from '@angular/core';
import { FormsModule }   from '@angular/forms';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule

  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  haveAnAccount = true;

  toggleAccount() {
    this.haveAnAccount = !this.haveAnAccount;
  }

  onLogin() {
    // Handle login logic here
    console.log('Login form submitted');
  }

  onSignUp() {
    // Handle sign up logic here
    debugger
    console.log('Sign up form submitted');
  }
}
