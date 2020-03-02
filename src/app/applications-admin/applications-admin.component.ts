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
  public searchUpdate = new Subject<string>();
  public editing: string[] = [];
  public agents = [];
  public agentSelected: string;

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

  filteByAgent(agent) {
    console.log(agent);
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
    let where;
    if (this.agentSelected) {
      where = `{
        agent: "${this.agentSelected}",
        address_contains: "${this.search}",
        applicationType: "${this.applicationType}"
      }`;
    } else {
      where = `{
        address_contains: "${this.search}",
        applicationType: "${this.applicationType}"
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
    }`;

    this.dataService.getData(query).subscribe(({ data, loading })  => {
      this.dataSource = new MatTableDataSource<Application>(data.applications);
      this.totalPages = data.applicationsConnection.aggregate.count;
      this.loading = false;
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
        this.getApplications();
        this.socketService.send('public', 'getApplications');
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
