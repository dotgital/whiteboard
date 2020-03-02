import { AuthService } from './../services/auth.service';
import { first } from 'rxjs/operators';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public hide = true;
  private uid: string;

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  constructor(
    private authenticationService: AuthService,
    private router: Router,
    private fireAuth: AngularFireAuth,
    private snackBard: MatSnackBar,
    private zone: NgZone,
  ) {
  }

  ngOnInit() {
    const currentUser = this.authenticationService.currentUserValue;
    if (currentUser) {
      this.router.navigate(['/dashboard']);
    }
  }

  login() {
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;

    this.authenticationService.login(email, password)
    .pipe(first())
    .subscribe(
        data => {
          // this.router.navigateByUrl(this.returnUrl);
          this.router.navigate(['/dashboard']).then(() => {
            // this.loading.dismiss();
          });
        },
        error => {
          console.log(error);
          const errorMessage = error['0'].messages['0'].message;
          this.snackBard.open(errorMessage, null, {duration: 3000});
          // this.loading.dismiss();
        });
  }
}
