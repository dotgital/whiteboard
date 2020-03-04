import { HttpClient } from '@angular/common/http';
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
import { map } from 'rxjs/operators';

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
    private http: HttpClient,
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
    // this.applicatiosOld.forEach(appOld => {
    //   console.log(appOld.address);
    //   this.authService.migrateApp(appOld).subscribe(res => {
    //     console.log(res);
    //   });
    // });
  }

  getOldApps(){
    // this.dataService.getAllApps().subscribe(res => {
    //   const oldApps: any[] = res;
    //   oldApps.forEach(el => {
    //     // console.log(el);
    //     const query = `query { users(where: {fullName_contains: "${el.createBy}"}) {id, fullName}}`;
    //     this.dataService.getData(query).subscribe(resUser => {
    //       // console.log(el);

    //       let applicationType;
    //       if(el.appType == 'Lease' || el.appType == undefined){
    //         applicationType = 'Leasing';
    //       } else if (el.appType == 'Sale' && el.saleType == 'Listing') {
    //         applicationType = 'Listing';
    //       } else if (el.appType == 'Sale' && el.saleType == 'Buying') {
    //         applicationType = 'Buying';
    //       }

    //       const agentId = resUser.data.users['0'] ? resUser.data.users['0'].id : '5e334f32e7071646dfd6dfba';
    //       const invoiceOut = el.invoiceOut ? el.invoiceOut : false;
    //       const moneyIn = el.moneyIn ? el.moneyIn : false;
    //       const listingAgreement = el.listingAgreement ? el.listingAgreement : false;
    //       const price = el.price ? el.price : 0;
    //       const offerExecuted = el.offerExecuted ? el.offerExecuted : false;
    //       const closed = el.closed ? el.closed : false;
    //       const paid = el.completed ? el.completed : false;
    //       const offerOut = el.offerOut ? el.offerOut : false;
    //       const address = el.address ? el.address : '';
    //       const approved = el.approved ? el.approved : false;
    //       const invoicePaid = el.invoicePaid ? el.invoicePaid : false;
    //       const denied = el.denied ? el.denied : false;
    //       const createdAt = el.createDate ? new Date(el.createDate).toISOString().slice(0, 16) : null;

    //       const newApp = {
    //         applicationType,
    //         invoiceOut,
    //         moneyIn,
    //         listingAgreement,
    //         price,
    //         offerExecuted,
    //         closed,
    //         paid,
    //         offerOut,
    //         address,
    //         approved,
    //         invoicePaid,
    //         denied,
    //         createdAt,
    //         agent: {
    //           _id: agentId
    //         }
    //       };

    //       if(!el.__typename){
    //         this.http.post('https://backend.apartmentsource.com/applications', newApp).pipe(map(newUser => {
    //           return newUser;
    //         })).subscribe(resp => console.log(resp));
    //       }

    //     });
    //   });
    // });
  }

  ngOnDestroy(): void {
    this.socketService.closeConnection();
  }
}
