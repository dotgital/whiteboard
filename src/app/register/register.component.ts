import { Users } from '../users/users';
import { DataService } from './../data.service';
import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public hide = true;

  private userData: Users = {
    avatar: '',
    id: '',
    name: '',
    email: '',
    isAdmin: null,
    isActive: null,
    teamId: null,
  };

  registerForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  constructor(
    private authService: AuthService,
    private snackBard: MatSnackBar,
    private router: Router,
    private dataService: DataService,
  ) { }

  ngOnInit() {
  }

  register() {
    this.userData.email = this.registerForm.value.email;
    const password = this.registerForm.value.password;
    this.userData.name = this.registerForm.value.name;
    this.authService.register(this.userData, password)
    .then(res => {
      console.log(res);
      this.userData.id = res.user.uid;
      this.userData.name = this.registerForm.value.name;
      this.userData.email = res.user.email;
      // this.userData.isAdmin = true;
      this.dataService.createUser(this.userData).then(() => {
        this.snackBard.open('New Account have been created, please login using your credentials', null, {duration: 3000});
        this.router.navigate(['/dashboard/users']);
      }).catch(err => {
        this.snackBard.open(err, null, {duration: 3000});
      });
    })
    .catch(err => {
      console.log(err);
      let message: string;
      switch (err.code) {
        case 'auth/invalid-email':
          message = 'Invalid email address';
          break;
        case 'auth/user-not-found':
          message = 'Incorrect email address or password';
          break;
        default:
          message = err.message;
      }
      this.snackBard.open(message, null, {duration: 3000});
    });
  }
}
