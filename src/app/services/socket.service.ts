import { AuthService } from './auth.service';
import { User } from './../models/user';
import { Injectable, NgModule } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class SocketService {

  constructor(
    private socket: Socket,
    private authService: AuthService
  ) {
    // this.connect();
    // super({ url: 'https://backend.apartmentsource.com', options: {query: {userId: '231231232313'}} });
   }

  // listenPublic() {
  //   return this.socket.fromEvent('serverToClient').pipe(map( data => data ));
  // }

  // listenPrivate() {
  //   const currentUser = this.authService.currentUserValue;
  //   if (currentUser) {
  //     return this.socket.fromEvent(`${currentUser.user.id}`).pipe(map( data => data ));
  //   }
  // }

  send(to, method) {
    const msg = {to, method}
    this.socket.emit('emit', msg);
  }

  get() {
    return this.socket.fromEvent<any>('public').pipe(map( data => {
      const currentUser = this.authService.currentUserValue.user.id;
      // console.log(data);
      if (data.to === 'public' || data.to === currentUser) {
        return data.method;
      }
    }));
  }

  // getPrivate() {
  //   const currentUser = this.authService.currentUserValue;
  //   if (currentUser) {
  //     return this.socket.fromEvent(`${currentUser.user.id}`).pipe(map( data => console.log(data) ));
  //   }
  // }

  // emit(msg) {
  //   this.socket.emit('clientToServer', msg);
  // }

  closeConnection() {
    return this.socket.removeListener('public');
  }
}
