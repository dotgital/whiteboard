import { Users } from './users/users';
import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userDetails: firebase.User;

  constructor(
    private fireAuth: AngularFireAuth,
  ) {
      this.fireAuth.authState.subscribe(res => {
        if (res) {
          this.userDetails = res;
        }
      });
    }

    getUser() {
      if (this.userDetails) {
        return this.userDetails;
      }
    }

    login(email: string, password: string) {
      return this.fireAuth.auth.signInWithEmailAndPassword(email, password);
    }

    register(user: Users, password: string) {
      return this.fireAuth.auth.createUserWithEmailAndPassword(user.email, password);
      // .then(res => {
      //   user.id = res.user.uid;
      //   return this.dataService.createUser(user);
      // }).catch(err => {
      //   console.log(err);
      // });
    }

    forgot(email: string) {
      return this.fireAuth.auth.sendPasswordResetEmail(email);
    }

    sendVerificationEmail() {
      return this.fireAuth.auth.currentUser.sendEmailVerification();
    }

    signOut() {
      return this.fireAuth.auth.signOut();
    }
}
