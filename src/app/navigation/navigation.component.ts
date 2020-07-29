import { SocketService } from './../services/socket.service';
import { User } from './../models/user';
import { AuthService } from './../services/auth.service';
import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { Users } from '../users/users';
import { Location } from '@angular/common';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  // public loggedUser: Users;
  public user: User;
  public userAvatar: string;
  public title: string;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private authService: AuthService,
    private router: Router,
    private socketService: SocketService,
    private location: Location
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

      this.router.events.subscribe(res => {
        const path = this.location.path().split('/')[2];
        switch (path) {
          case 'applications-stats':
            this.title = 'Agent Performance';
            break;

          case 'applications':
            this.title = 'My Deals';
            break;

          case 'applications-admin':
            this.title = 'Admin Page';
            break;

          default:
            this.title = '';
            break;
        }
      })
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
