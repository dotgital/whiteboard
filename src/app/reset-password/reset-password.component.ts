import { AuthService } from './../services/auth.service';
import { first } from 'rxjs/operators';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  public hide = true;
  private uid: string;
  private code: string;

  resetForm = new FormGroup({
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    passwordConfirm: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  constructor(
    private authenticationService: AuthService,
    private router: Router,
    private snackBard: MatSnackBar,
    private zone: NgZone,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    const currentUser = this.authenticationService.currentUserValue;
    if (currentUser) {
      this.router.navigate(['/dashboard']);
    }
    this.route.queryParamMap.subscribe(queryParams => {
      this.code = queryParams.get('code');
      console.log(this.code);
    });
  }

  reset() {
    const password = this.resetForm.value.password;
    const passwordConfirm = this.resetForm.value.passwordConfirm;

    this.authenticationService.reset(this.code, password, passwordConfirm)
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
