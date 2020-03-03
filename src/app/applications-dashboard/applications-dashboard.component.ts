import { SocketService } from './../services/socket.service';
import { MessageComponent } from './message/message.component';
import { MatDialog } from '@angular/material/dialog';
import { User } from './../models/user';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { DataService } from './../data.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Application } from '../applications/application';
import { Users } from '../users/users';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-applications-dashboard',
  templateUrl: './applications-dashboard.component.html',
  styleUrls: ['./applications-dashboard.component.scss']
})
export class ApplicationsDashboardComponent implements OnInit, OnDestroy {

  public months = [
    {display: 'January', value: '201901'},
    {display: 'Febraury', value: '201902'}
  ];

  applicatiosOld = [];

  public loggedUser: Users;
  public message: string;
  public fullScreen = false;
  public user: any;

  public topAgent: string;
  public apps: any[];
  constructor(
    public dialog: MatDialog,
    private dataService: DataService,
    private authService: AuthService,
    private socketService: SocketService,
  ) { }

  ngOnInit() {
    this.authService.currentUser.subscribe(data => {
      this.user = data;
    });
    this.getMessage();
    this.getApplications();

    this.socketService.get().subscribe(method => {
      // console.log(method);
      if ( typeof this[method] === 'function' ) {
        this[method]();
      }
    });

    this.getOldApps();
  }

  getApplications() {
    const where = `{
      paid_ne: true,
    }`;

    const query = `
    query{
        applications(sort: "createdAt:desc", where: ${where}) {
            id,
            applicationType,
            address,
            approved,
            createdAt,
            denied,
            listingAgreement,
            offerOut,
            offerExecuted,
            closed,
            moneyIn,
            price,
            invoicePaid,
            invoiceOut,
            agent {
                id
                fullName
                avatar {
                  url
                }
            }
        }
        applicationsConnection {
          groupBy {
            agent {
              key
              connection {
                  aggregate {
                      count
                  }
              }
            }
          }
        }
    }`;

    this.dataService.getData(query).subscribe(res => {
      this.apps = res.data.applications;
      const agentStats: [] = res.data.applicationsConnection.groupBy.agent;
      const stats = [];

      agentStats.forEach((el: any) => {
        const key = el.key;
        const count = el.connection.aggregate.count;
        stats.push({key, count});
      });

      stats.sort((a, b) => (a.count > b.count) ? -1 : 1);
      this.topAgent = stats['0'].key;
    });
  }

  getMessage() {
    const query = `query{
      static(id: "5e5702eda23dfc62fc1bcf4d"){
        whiteBoardMessage
      }
    }`;
    this.dataService.getData(query).subscribe(res => {
      this.message = res.data.static.whiteBoardMessage;
    });
  }

  editMessage() {
    const dialogRef = this.dialog.open(MessageComponent, {
      width: '550px',
      data: {message: this.message}
    });

    dialogRef.afterClosed().subscribe(res => {
      this.socketService.send('public', 'getMessage');
      this.message = res;
    });
  }

  openFullScreen() {
    const element = document.getElementById('full-screen');
    this.fullScreen = !this.fullScreen;
    const screenfull = require('screenfull');
    if (screenfull.isEnabled) {
      screenfull.toggle(element);
    }
  }

  migrateApps() {
    this.applicatiosOld.forEach(appOld => {
      console.log(appOld.address);
      this.authService.migrateApp(appOld).subscribe(res => {
        console.log(res);
      });
    });
  }

  async getOldApps(){
    this.dataService.getAllApps().subscribe(res => {
      const oldApps: any[] = res;
      oldApps.forEach(el => {
        // console.log(el);
        const query = `query { users(where: {fullName_contains: "${el.createBy}"}) {id, fullName}}`;
        this.dataService.getData(query).subscribe(resUser => {
          console.log(el);
          console.log(resUser.data.users["0"]);
        });
      });
    });
  }

  ngOnDestroy(): void {
    this.socketService.closeConnection();
  }
}
