import { SocketService } from './../services/socket.service';
import { AuthService } from './../services/auth.service';
import { CreateApplicationComponent } from './create-application/create-application.component';
import { DataService } from './../data.service';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Application } from './application';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.scss']
})
export class ApplicationsComponent implements OnInit, OnDestroy {

  displayedColumns: string[] = [];
  dataSource: MatTableDataSource<Application>;

  public applications: Application[] = [];
  public loading = true;
  public startPage = 0;
  public limitPage = 10;
  public totalPages: number;
  public search = '';
  public applicationType = 'Leasing';
  public editing: string[] = [];

  private applicationData: Application = {
    id: '',
    date: '',
    createById: '',
    createdAt: '',
    address: '',
    price: null,
    moneyIn: null,
    approved: null,
    invoiceOut: null,
    invoicePaid: null,
    completed: null,
    offerOut: null,
    listingAgreement: null,
    offerExecuted: null,
    closed: null,
    appType: '',
    denied: null,
  };

  private userId: string;

  searchUpdate = new Subject<string>();

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    public dialog: MatDialog,
    private dataService: DataService,
    private authService: AuthService,
    private socketService: SocketService,
  ) {
    this.dataSource = new MatTableDataSource(this.applications);
  }

  ngOnInit() {
    this.displayedColumns = ['address', 'createdAt', 'applicationType', 'price', 'moneyIn', 'approved' , 'denied', 'edit'];
    this.loading = true;
    this.dataSource.sort = this.sort;

    const user = this.authService.currentUserValue;
    this.userId = user.user.id;
    this.getApplications();

    this.searchUpdate.pipe(
      debounceTime(400),
      distinctUntilChanged())
      .subscribe(value => {
        this.search = value;
        this.getApplications();
      });

    this.socketService.get().subscribe(method => {
      // console.log(method);
      if ( typeof this[method] === 'function' ) {
        this[method]();
      }
    });
  }

  keyUpLoading() {
    this.loading = true;
  }

  displayCol(applicationType) {
    this.loading = true;
    this.applicationType = applicationType;
    switch (applicationType) {
      case 'Leasing':
        this.displayedColumns = ['address', 'createdAt', 'applicationType', 'price', 'moneyIn', 'approved' , 'denied', 'edit'];
        break;
      case 'Listing':
        this.displayedColumns = ['address', 'createdAt', 'applicationType',
        'price', 'listingAgreement', 'offerExecuted', 'closed', 'edit'];
        break;
      case 'Buying':
        this.displayedColumns = ['address', 'createdAt', 'applicationType',
        'price', 'offerOut', 'offerExecuted', 'closed', 'edit'];
        break;
      default:
        break;
    }
    this.getApplications();
  }

  getApplications() {
    const where = `{
      agent: "${this.userId}",
      address_contains: "${this.search}",
      applicationType: "${this.applicationType}"
    }`;

    const query = `
    query{
        applications(sort: "createdAt:desc", start: ${this.startPage}, limit: ${this.limitPage}, where: ${where}) {
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
            agent {
                id
                fullName
            }
        }
        applicationsConnection (where: ${where}) {
            aggregate {
                count
            }
        }
    }`;

    this.dataService.getData(query).subscribe(({ data, loading })  => {
      this.dataSource = new MatTableDataSource<Application>(data.applications);
      this.totalPages = data.applicationsConnection.aggregate.count;
      this.loading = false;
    });
  }

  createApp(): void {
    const dialogRef = this.dialog.open(CreateApplicationComponent, {
      width: '550px',
      data: {data: this.applicationData, applicationType: this.applicationType}
    });

    dialogRef.afterClosed().subscribe(res => {
      this.socketService.send('public', 'getApplications');
      this.getApplications();
    });
  }

  edit(appId) {
    if (!this.editing.includes(appId)) {
      this.editing.push(appId);
    }
  }

  save(appId) {
    if (this.editing.includes(appId)) {
      this.editing.splice( this.editing.indexOf(appId), 1 );
    }
  }

  updateApp(app: Application, field) {
    console.log(app)
    console.log(field)
    // const email = {
    //   to: 'marcelcruz85@gmail.com',
    //   data: 'this is the email body',
    //   subject: 'this is the email subject',
    // };
    // this.dataService.sendNotification(email).subscribe(res => {
    //   console.log(res);
    // });

    if (this.editing.includes(app.id)) {
      this.loading = true;
      app[field] = !app[field];
      const appData = `mutation {
          updateApplication(input: {
            where: {
              id: "${app.id}"
            },
            data: {
              ${field}: ${app[field]}
            }
          }) {
            application {
              id
            }
          }
        }`;

      this.dataService.updateData(appData).subscribe(() => {
        this.socketService.send('public', 'getApplications');
        this.getApplications();
      });
    }
  }

  paginator(e) {
    this.loading = true;
    this.startPage = e.pageIndex !== 0 ? e.pageIndex * e.pageSize : 0;
    this.limitPage = e.pageSize;
    this.getApplications();
  }

  ngOnDestroy(): void {
    this.socketService.closeConnection();
  }
}
