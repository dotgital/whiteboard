import { SocketService } from './../services/socket.service';
import { User } from './../models/user';
import { DataService } from './../data.service';
import { CreateUserComponent } from './create-user/create-user.component';
import { Users } from './users';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { map, tap, scan, mergeMap, throttleTime } from 'rxjs/operators';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Subscription } from 'rxjs';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {

  displayedColumns: string[] = ['fullName', 'email', 'role', 'blocked', 'edit'];
  dataSource: MatTableDataSource<User>;

  // public users: Users[] = [
  //   {id: 'ewweewqe', name: 'Marcel Cruz', email: 'marclcruz85@gmail.com', isAdmin: true, isActive: false, teamId: null},
  // ];

  public users: User[] = [];
  public loading = false;
  private queryUsers: Subscription;
  private realTimeOp;

  private userData: Users = {
    avatar: '',
    id: '',
    name: '',
    email: '',
    isAdmin: null,
    isActive: null,
    teamId: null,
  };

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    public dialog: MatDialog,
    private dataService: DataService,
    private apollo: Apollo,
    // private socket: Socket,
    private socketService: SocketService,
  ) {
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(this.users);
  }

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.getUsers();

    this.socketService.get().subscribe(method => {
      if ( typeof this[method] === 'function' ) {
        this[method]();
      }
    });
    // this.socketService.listenPrivate().subscribe(data => this.realTimeOps(data));
    // this.socketService.listenPublic().subscribe(data => this.realTimeOps(data));
  }

  // realTimeOps(msg) {
  //   console.log(msg);
  //   switch (msg) {
  //     case 'getUsers':
  //       this.getUsers();
  //       break;
  //     default:
  //       break;
  //   }
  // }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  addUser(): void {
    const dialogRef = this.dialog.open(CreateUserComponent, {
      width: '550px',
      data: null
    });

    dialogRef.afterClosed().subscribe();
  }

  updateUser(user: User): void {
    const dialogRef = this.dialog.open(CreateUserComponent, {
      width: '550px',
      data: {user}
    });

    dialogRef.afterClosed().subscribe();
  }

  getUsers() {
    this.queryUsers = this.apollo.query<any>({
      query: gql`
        query {
          users {
            id,
            fullName,
            username,
            email,
            blocked,
            role {
              name
            },
            avatar {
              url
            }
          }
        }`,
        fetchPolicy: 'network-only',
        errorPolicy: 'all',
    })
      .subscribe(({ data, loading }) => {
        // console.log(data);
        this.dataSource = new MatTableDataSource<User>(data.users);
        this.dataSource.paginator = this.paginator;
        // console.log(this.dataSource);
        this.queryUsers.unsubscribe();
      });
  }

  ngOnDestroy() {
    this.queryUsers.unsubscribe();
    this.socketService.closeConnection();
  }
}
