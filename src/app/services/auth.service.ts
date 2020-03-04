import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject,Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSubject: BehaviorSubject < User > ;
  public currentUser: Observable < User > ;
  public user: User;

  constructor(
    private http: HttpClient,
  ) {
    this.currentUserSubject = new BehaviorSubject < User > (JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(username: string, pw: string) {
    return this.http.post < any > ('https://backend.apartmentsource.com/auth/local', {
        identifier: username,
        password: pw
      })
      .pipe(map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      }));
  }

  forgotPassword(emailAddress: string) {
    return this.http.post < any > ('https://backend.apartmentsource.com/auth/forgot-password', {
        email: emailAddress,
        url: 'https://backend.apartmentsource.com/admin/plugins/users-permissions/auth/reset-password'
      })
      .pipe(map(user => {
        return user;
      }));
  }

  reset(code: string, pw: string, pwcnf: string) {
    return this.http.post < any > ('https://backend.apartmentsource.com/auth/reset-password', {
        code,
        password: pw,
        passwordConfirmation: pwcnf
      })
      .pipe(map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      }));
  }

  createUser(user: User, password) {
    return this.http.post('https://backend.apartmentsource.com/users', {
      fullName: user.user.fullName,
      username: user.user.username,
      email: user.user.email,
      blocked: user.user.blocked,
      password,
    }).pipe(map(newUser => {
      return newUser;
    }));
  }

  updateUser(user: User, passwd) {
    const roleId = user.user.role.name === 'Administrator' ? '5dc49d9292e8e019a58a5f74' : '5dc49d9292e8e019a58a5f75';
    const userData: {[k: string]: any} = {
      fullName: user.user.fullName,
      username: user.user.username,
      email: user.user.email,
      blocked: user.user.blocked,
      role: {
        _id: roleId
      }
    };
    if (passwd) {
      userData.password = passwd;
    }
    // console.log(userData);
    return this.http.put(`https://backend.apartmentsource.com/users/${user.user.id}`, userData).pipe(map(newUser => {
      return newUser;
    }));
  }

  uploadAvatar(avatar) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'multipart/form-data');
    return this.http.post('https://backend.apartmentsource.com/upload', avatar);
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  migrateApp(app) {
    return this.http.post('https://backend.apartmentsource.com/applications', app).pipe(map(newUser => {
      return newUser;
    }));
  }

}
