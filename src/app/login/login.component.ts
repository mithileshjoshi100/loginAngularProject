import { Component } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { UserService } from './user.service'
import { map, Observable } from 'rxjs';
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
  userLoggedIn = false;
  loginData = {
    username: '',
    password: ''
  };

  signupData = {
    username: '',
    email: '',
    password: ''
  };

  constructor(private userService: UserService) {
    this.userLoggedIn = false
   }

  toggleAccount() {
    this.haveAnAccount = !this.haveAnAccount;
  }

  authenticateUser(username: string, password: string): Observable<boolean> {
    return this.userService.getUsers().pipe(
      map((users: any[]) => {
        const userList = users.map(user => ({ email: user.email, password: user.password }));
        console.log('Users fetched:', userList);
        return userList.some(user => user.email === username && user.password === password);
      })
    );
  }
  onLogin() {
    if (this.authenticateUser(this.loginData.username, this.loginData.password)) {
      this.userLoggedIn = true;
      this.showHomeView();
    } else {
      this.userLoggedIn = false;
      // Handle invalid login here (e.g., show error message)
    }
    console.log('Login form submitted');
  }

  onSignUp() {
    this.userService.addUser(this.signupData).subscribe(response => {
      console.log('Sign up form submitted', response);
      this.toggleAccount(); // Switch to login form after successful sign up
    }, error => {
      console.error('Error signing up:', error);
      // Handle error (e.g., show error message)
    });
    this.userLoggedIn = true
    console.log('Sign up form submitted');
  }

  showHomeView() {
    // Navigate to home view or perform actions after successful login
  }

  userLogout() {
    console.log('Logging out');
    this.userLoggedIn = false;
  }
}
