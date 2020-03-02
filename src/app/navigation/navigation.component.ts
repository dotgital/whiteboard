import { SocketService } from './../services/socket.service';
import { User } from './../models/user';
import { AuthService } from './../services/auth.service';
import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Users } from '../users/users';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  // public loggedUser: Users;
  public user: User;
  public userAvatar: string;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private authService: AuthService,
    private router: Router,
    private socketService: SocketService,
    ) {
      this.authService.currentUser.subscribe(data => {
        this.user = data;
        if (data && data.user && data.user.avatar) {
          // this.userAvatar = `https://backend.apartmentsource.com//${data.user.avatar.url}`;
        }
      });


      this.socketService.get().subscribe(method => {
        // console.log(method);
        if ( typeof this[method] === 'function' ) {
          this[method]();
        }
      });

      // this.socketService.listenPrivate().subscribe(data => this.realTimeOps(data));
      // this.socketService.listenPublic().subscribe(data => this.realTimeOps(data));
    }

    // realTimeOps(msg){
    //   console.log(msg);
    //   switch (msg) {
    //     case 'refreshUi':
    //       this.authService.logout();
    //       this.router.navigate(['/login']);
    //       break;
    //     default:
    //       break;
    //   }
    // }
    logout() {
      this.authService.logout();
      this.router.navigate(['/login']);
    }
}
