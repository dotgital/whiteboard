import { AngularFireAuth } from '@angular/fire/auth';
import { CreateApplicationComponent } from './../create-application/create-application.component';
import { DataService } from './../../data.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { map, tap, scan, mergeMap, throttleTime } from 'rxjs/operators';
import { Application } from './../application';


@Component({
  selector: 'app-manage-applications',
  templateUrl: './manage-applications.component.html',
  styleUrls: ['./manage-applications.component.scss']
})
export class ManageApplicationsComponent implements OnInit {

  displayedColumns: string[] = ['address', 'createDate', 'createBy', 'saleType', 'price', 'offerOut', 'listingAgreement', 'offerExecuted', 'closed', 'moneyIn', 'approved' , 'denied', 'invoiceOut', 'invoicePaid', 'completed'];
  dataSource: MatTableDataSource<Application>;

  // public users: Users[] = [
  //   {id: 'ewweewqe', name: 'Marcel Cruz', email: 'marclcruz85@gmail.com', isAdmin: true, isActive: false, teamId: null},
  // ];

  public applications: Application[] = [];
  public loading = false;
  public selectedMonth;
  public selectedYear;

  public years = [
    {display: '2019', value: '2019'},
    {display: '2020', value: '2020'},
    {display: '2021', value: '2021'},
  ];
  public months = [
    {display: 'January', value: '01'},
    {display: 'January', value: '02'},
    {display: 'January', value: '03'},
    {display: 'January', value: '04'},
    {display: 'January', value: '05'},
    {display: 'January', value: '06'},
    {display: 'January', value: '07'},
    {display: 'January', value: '08'},
    {display: 'January', value: '09'},
    {display: 'January', value: '10'},
    {display: 'January', value: '11'},
    {display: 'January', value: '12'},
  ];

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

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    public dialog: MatDialog,
    private dataService: DataService,
    private afAuth: AngularFireAuth,
  ) {
    this.dataSource = new MatTableDataSource(this.applications);
  }

  ngOnInit() {
    this.loading = true;
    const today = new Date();
    const monthCurr = String(today.getMonth() + 1).padStart(2, '0');
    const yearCurr = today.getFullYear();
    console.log(yearCurr);
    this.selectedMonth = monthCurr.toString();
    this.selectedYear = yearCurr.toString();

    this.dataSource.sort = this.sort;
    this.afAuth.user.subscribe(res => {
      if (res) {
        this.userId = res.uid;
        this.getApplications();
      }
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  addUser(): void {
    const dialogRef = this.dialog.open(CreateApplicationComponent, {
      width: '550px',
      data: this.applicationData
    });

    dialogRef.afterClosed().subscribe();
  }

  // getApplications() {
  //     this.dataService.getUserApplications(this.userId).subscribe(res => {
  //       console.log(res);
  //       this.dataSource = new MatTableDataSource<Application>(res);
  //       this.loading = false;
  //     });
  // }
  getApplications() {
    const start = `${this.selectedYear}${this.selectedMonth}01`;
    const end = `${this.selectedYear}${this.selectedMonth}31`;
    this.dataService.getAdminApplications(start, end).subscribe(res => {
      console.log(res);
      // this.topAgent = res['topAgents']['0'];
      // const appsData: Application[] = res;
      // this.applications = appsData;
      this.dataSource = new MatTableDataSource<Application>(res);
      this.loading = false;
    });
  }

  updateApp(app: Application, field) {
    // this.loading = true;
    app[field] = !app[field];
    this.dataService.updateApp(app).then(res => {
      console.log('record Updated ', res);
    }).catch(err => console.log(err));
  }

  changeMonth(event){
    this.selectedMonth = event.value;
    console.log(this.selectedMonth);
    this.getApplications();
  }

  changeYear(event){
    this.selectedYear = event.value;
    console.log(this.selectedMonth);
    this.getApplications();
  }
}
