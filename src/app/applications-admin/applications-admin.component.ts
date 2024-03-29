import { CreateApplicationComponent } from './../applications/create-application/create-application.component';
import { MatDialog } from '@angular/material/dialog';
import { SocketService } from './../services/socket.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from './../data.service';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { Application } from './../applications/application';

@Component({
  selector: 'app-applications-admin',
  templateUrl: './applications-admin.component.html',
  styleUrls: ['./applications-admin.component.scss']
})
export class ApplicationsAdminComponent implements OnInit, OnDestroy {

  public loading = true;
  public search: string = '';
  public applicationType = 'Leasing';
  public startPage = 0;
  public limitPage = 10;
  public totalPages: number;
  public totalPrice: number;
  public searchUpdate = new Subject<string>();
  public editing: string[] = [];
  public agents = [];
  public agentSelected: string;

  public moneyIn: boolean;
  public approved: boolean;
  public denied: boolean;
  public invoiceOut: boolean;
  public invoicePaid: boolean;
  public paid: boolean;
  public closed: boolean;
  public offerExecuted: boolean;
  public listingAgreement: boolean;
  public offerOut: boolean;

  public years = [
    {display: '2019', value: '2019'},
    {display: '2020', value: '2020'},
    {display: '2021', value: '2021'},
    {display: '2022', value: '2022'},
    {display: '2023', value: '2023'},
  ];
  public months = [
    {display: '01', value: '01'},
    {display: '02', value: '02'},
    {display: '03', value: '03'},
    {display: '04', value: '04'},
    {display: '05', value: '05'},
    {display: '06', value: '06'},
    {display: '07', value: '07'},
    {display: '08', value: '08'},
    {display: '09', value: '09'},
    {display: '10', value: '10'},
    {display: '11', value: '11'},
    {display: '12', value: '12'},
  ];

  public selectedMonth: string;
  public selectedYear: string;

  public dataSource: MatTableDataSource<Application>;
  public displayedColumns: string[] = ['address',
  'agent',
  'createdAt',
  'applicationType',
  'price',
  'moneyIn',
  'approved' ,
  'denied',
  'invoiceOut',
  'invoicePaid',
  'paid',
  'edit'];

  constructor(
    public dialog: MatDialog,
    private dataService: DataService,
    private socketService: SocketService,
  ) { }

  ngOnInit() {
    this.getUsers();
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

  filterByMonth(month) {
    this.selectedMonth = month;
    this.getApplications();
  }

  filteByYear(year) {
    this.selectedMonth = this.selectedYear === undefined ? undefined : this.selectedMonth;
    this.selectedYear = year;
    this.getApplications();
  }

  filteByAgent(agent) {
    this.agentSelected = agent;
    this.getApplications();
  }

  displayCol(applicationType) {
    this.loading = true;
    this.applicationType = applicationType;
    switch (applicationType) {
      case 'Leasing':
        this.displayedColumns = ['address', 'agent', 'createdAt', 'applicationType', 'price', 'moneyIn', 'approved' , 'denied',
        'invoiceOut',
        'invoicePaid',
        'paid', 'edit'];
        break;
      case 'Listing':
        this.displayedColumns = ['address', 'agent', 'createdAt', 'applicationType',
        'price', 'listingAgreement', 'offerExecuted', 'closed',
        'invoiceOut',
        'invoicePaid',
        'paid', 'edit'];
        break;
      case 'Buying':
        this.displayedColumns = ['address', 'agent', 'createdAt', 'applicationType',
        'price', 'offerOut', 'offerExecuted', 'closed',
        'invoiceOut',
        'invoicePaid',
        'paid', 'edit'];
        break;
      default:
        break;
    }
    this.getApplications();
  }

  getUsers() {
    const query = `query{
      users(sort: "fullName:asc"){
        id,
        fullName
      }
    }`;

    this.dataService.getData(query).subscribe(({ data, loading })  => {
      this.agents = data.users;
    });
  }

  getApplications() {
    const startMonth = this.selectedMonth !== undefined ? this.selectedMonth : '01';
    const startYear = this.selectedYear !== undefined ? this.selectedYear : '2000';
    const endMonth = this.selectedMonth !== undefined ? this.selectedMonth : '12';
    const endYear = this.selectedYear !== undefined ? this.selectedYear : '2500';

    const createdStartAt = new Date(parseInt(startYear), parseInt(startMonth) - 1 , 1).toISOString().substr(0, 10);
    const createdEndtAt = new Date(parseInt(endYear), parseInt(endMonth), 0).toISOString().substr(0, 10);

    let where;
    let totalPrice;
    const totalApproved: boolean = true;

    if (this.agentSelected) {
      where = `{
        agent: "${this.agentSelected}",
        address_contains: "${this.search}",
        applicationType: "${this.applicationType}"
        createdAt_gte: "${createdStartAt}"
        createdAt_lte: "${createdEndtAt} 23:59:59"
        moneyIn: ${this.moneyIn ? this.moneyIn : null}
        approved: ${this.approved ? this.approved : null}
        denied: ${this.denied ? this.denied : null}
        invoiceOut: ${this.invoiceOut ? this.invoiceOut : null}
        invoicePaid: ${this.invoicePaid ? this.invoicePaid : null}
        paid: ${this.paid ? this.paid : null}
        closed: ${this.closed ? this.closed : null}
        offerExecuted: ${this.offerExecuted ? this.offerExecuted : null}
        listingAgreement: ${this.listingAgreement ? this.listingAgreement : null}
        offerOut: ${this.offerOut ? this.offerOut : null}
      }`;
      totalPrice = `{
        agent: "${this.agentSelected}",
        address_contains: "${this.search}",
        applicationType: "${this.applicationType}"
        createdAt_gte: "${createdStartAt}"
        createdAt_lte: "${createdEndtAt} 23:59:59"
        approved: ${this.approved ? this.approved : null}
        moneyIn: ${this.moneyIn ? this.moneyIn : null}
        denied: ${this.denied ? this.denied : null}
        invoiceOut: ${this.invoiceOut ? this.invoiceOut : null}
        invoicePaid: ${this.invoicePaid ? this.invoicePaid : null}
        paid: ${this.paid ? this.paid : null}
        closed: ${this.closed ? this.closed : null}
        offerExecuted: ${this.offerExecuted ? this.offerExecuted : null}
        listingAgreement: ${this.listingAgreement ? this.listingAgreement : null}
        offerOut: ${this.offerOut ? this.offerOut : null}
      }`;
    } else {
      where = `{
        address_contains: "${this.search}",
        applicationType: "${this.applicationType}"
        createdAt_gte: "${createdStartAt}"
        createdAt_lte: "${createdEndtAt} 23:59:59"
        moneyIn: ${this.moneyIn ? this.moneyIn : null}
        approved: ${this.approved ? this.approved : null}
        denied: ${this.denied ? this.denied : null}
        invoiceOut: ${this.invoiceOut ? this.invoiceOut : null}
        invoicePaid: ${this.invoicePaid ? this.invoicePaid : null}
        paid: ${this.paid ? this.paid : null}
        closed: ${this.closed ? this.closed : null}
        offerExecuted: ${this.offerExecuted ? this.offerExecuted : null}
        listingAgreement: ${this.listingAgreement ? this.listingAgreement : null}
        offerOut: ${this.offerOut ? this.offerOut : null}
      }`;
      totalPrice = `{
        address_contains: "${this.search}",
        applicationType: "${this.applicationType}"
        createdAt_gte: "${createdStartAt}"
        createdAt_lte: "${createdEndtAt} 23:59:59"
        approved: ${this.approved ? this.approved : null}
        moneyIn: ${this.moneyIn ? this.moneyIn : null}
        denied: ${this.denied ? this.denied : null}
        invoiceOut: ${this.invoiceOut ? this.invoiceOut : null}
        invoicePaid: ${this.invoicePaid ? this.invoicePaid : null}
        paid: ${this.paid ? this.paid : null}
        closed: ${this.closed ? this.closed : null}
        offerExecuted: ${this.offerExecuted ? this.offerExecuted : null}
        listingAgreement: ${this.listingAgreement ? this.listingAgreement : null}
        offerOut: ${this.offerOut ? this.offerOut : null}
      }`;
    }


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
            invoiceOut,
            invoicePaid,
            paid,
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
        totalPrice: applicationsConnection (where: ${totalPrice}) {
          aggregate {
              sum{
                price
              }
          }
      }
    }`;
    // console.log(query);
    this.dataService.getData(query).subscribe(({ data, loading })  => {
      // console.log(data);
      this.dataSource = new MatTableDataSource<Application>(data.applications);
      this.totalPages = data.applicationsConnection.aggregate.count;
      this.totalPrice = data.totalPrice.aggregate.sum.price;
      this.loading = false;
    });
  }

  edit(app) {
    // console.log(app);
    const dialogRef = this.dialog.open(CreateApplicationComponent, {
      width: '550px',
      data: {data: app, applicationType: this.applicationType}
    });

    dialogRef.afterClosed().subscribe(res => {
      this.socketService.send('public', 'getApplications');
      this.getApplications();
    });
    // if (!this.editing.includes(appId)) {
    //   this.editing.push(appId);
    // }
  }

  save(appId) {
    if (this.editing.includes(appId)) {
      this.editing.splice( this.editing.indexOf(appId), 1 );
    }
  }

  updateApp(app: Application, field) {
    // if (this.editing.includes(app.id)) {
    //   this.loading = true;
    //   app[field] = !app[field];
    //   const appData = `mutation {
    //       updateApplication(input: {
    //         where: {
    //           id: "${app.id}"
    //         },
    //         data: {
    //           ${field}: ${app[field]}
    //         }
    //       }) {
    //         application {
    //           id
    //         }
    //       }
    //     }`;

    //   this.dataService.updateData(appData).subscribe(() => {
    //     this.getApplications();
    //     this.socketService.send('public', 'getApplications');
    //   });
    // }
    // this.applicationData = app;
    const dialogRef = this.dialog.open(CreateApplicationComponent, {
      width: '550px',
      data: {data: app, applicationType: this.applicationType}
    });

    dialogRef.afterClosed().subscribe(res => {
      this.socketService.send('public', 'getApplications');
      this.getApplications();
    });
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
