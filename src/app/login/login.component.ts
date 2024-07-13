import { Component } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { UserService } from './user.service'
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
  loginData = {
    username: '',
    password: ''
  };

  signupData = {
    username: '',
    email: '',
    password: ''
  };

  constructor(private userService: UserService) { }

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
    const x  = this.userService.addUser(this.signupData).subscribe(response => {
      console.log('Sign up form submitted', response);
      this.toggleAccount(); // Switch to login form after successful sign up
    });
    console.log('Sign up form submitted');
  }
}
