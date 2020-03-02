import { SocketService } from './../../services/socket.service';
import { User } from './../../models/user';
import { Users } from '../users';
import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from './../../data.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import * as firebase from 'firebase/app';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  @ViewChild('avatarInput', {static: false}) avatarInput;
  public files: Set<File> = new Set();

  public loading = false;
  public update = false;
  public hide = true;
  public avatar;
  public task;
  public downloadURL;
  public adminChanged: false;
  public blokedChanged: false;
  private userData: Users = {
    avatar: '',
    id: '',
    name: '',
    email: '',
    isAdmin: null,
    isActive: true,
    teamId: null,
  };


  public user: User = {
    jwt: null,
    user: {
      id: null,
      fullName: '',
      username: '',
      email: '',
      blocked: null,
      role: {
        name: '',
      },
      avatar: [{
        url: '',
      }]
    }
  };

  private secondFireBase;

  public createUserForm: FormGroup;
  public imageSrc;

  constructor(
    public dialogRef: MatDialogRef < CreateUserComponent > ,
    private snackBard: MatSnackBar,
    private router: Router,
    private dataService: DataService,
    private afStorage: AngularFireStorage,
    private authService: AuthService,
    private socketService: SocketService,
    @Inject(MAT_DIALOG_DATA) public data: User
  ) {}

  ngOnInit() {
    // console.log(this.data.user);
    if ( this.data && this.data.user) {
      if ( this.data.user.avatar.length > 0 || !this.data.user.avatar === undefined) {
        this.imageSrc = `https://backend.apartmentsource.com${this.data.user.avatar['0'].url}`;
      }
      this.update = this.data ? true : false;
      this.user.user.id = this.data ? this.data.user.id : null;
      this.user.user.fullName = this.data ? this.data.user.fullName : '';
      this.user.user.email = this.data ? this.data.user.email : '';
      this.user.user.role.name = this.data.user.role.name;
      this.user.user.blocked = this.data.user.blocked;
    }

    const passwordValidators = !this.update ? [Validators.required , Validators.minLength(6)] : [Validators.minLength(6)] ;
    this.createUserForm = new FormGroup({
      fullName: new FormControl(this.user.user.fullName, Validators.required),
      email: new FormControl({value: this.user.user.email, disabled: this.update}, [Validators.required, Validators.email]),
      password: new FormControl(null, passwordValidators),
      isAdmin: new FormControl(this.user.user.role.name  === 'Administrator' ? true : false),
      isBloked: new FormControl(this.user.user.blocked ? true : false),
    });
  }

  createUser() {
    this.loading = true;
    if (this.update) {
      this.updateUser();
      return;
    }

    // user.user = {} as null;
    this.user.user.fullName = this.createUserForm.value.fullName;
    this.user.user.email = this.createUserForm.value.email;
    this.user.user.username = this.createUserForm.value.email;
    this.user.user.blocked = this.createUserForm.value.isBloked ? true : false;
    const password = this.createUserForm.value.password;
    this.authService.createUser(this.user, password).subscribe(
      data => {
        this.user.user.id = data['id'];
        this.updateUser();
        // console.log(data);
      },
      err => {
        console.log(err);
        const erroMsg = err['0'].messages['0'].message;
        this.snackBard.open(erroMsg, null, {
            duration: 3000
        });
      });
  }

  updateUser() {
    this.user.user.role = {
      name: this.createUserForm.value.isAdmin === true ? 'Administrator' : '',
    };
    this.user.user.email = this.createUserForm.value.email;
    this.user.user.username = this.createUserForm.value.email;
    this.user.user.fullName = this.createUserForm.value.fullName;
    const password = this.createUserForm.value.password;
    this.user.user.blocked = this.createUserForm.value.isBloked ? true : false;
    this.authService.updateUser(this.user, password).subscribe(
      data => {
        if (this.avatar) {
          this.uploadAvatar(data);
        } else {
          this.closeRefresh();
        }
      },
      err => {
        console.log(err);
        const erroMsg = err['0'].messages['0'].message;
        this.snackBard.open(erroMsg, null, {
            duration: 3000
        });
      });
  }

  uploadAvatar(userData) {
      const formData = new FormData();
      formData.append('files', this.avatar, this.avatar.name);
      formData.append('refId', userData.id);
      formData.append('ref', 'user');
      formData.append('source', 'users-permissions');
      formData.append('field', 'avatar');

      this.authService.uploadAvatar(formData).subscribe( data => {
        // console.log(data);
        this.closeRefresh();
      },
      error => {
        console.log(error);
      });
  }

  preview(files: FileList): void {
    if (files) {
      this.avatar = files.item(0);

      const reader = new FileReader();
      reader.onload = e => {
        this.imageSrc = reader.result;
      };
      reader.readAsDataURL(this.avatar);
    }
  }

  closeRefresh() {
    // const msgs = [];

    // if (this.adminChanged || this.blokedChanged) {
    //   msgs.push({ to: this.user.user.id, body: 'refreshUi'});
    // }
    // msgs.push({ to: '', body: 'getUsers'});

    // msgs.forEach( msg => {
    //     this.socketService.emit(msg);
    //   }
    // );
    this.socketService.send('public', 'getUsers');
    if (this.adminChanged || this.blokedChanged) {
      this.socketService.send(this.user.user.id, 'logout');
    }
    this.loading = false;
    this.dialogRef.close();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
