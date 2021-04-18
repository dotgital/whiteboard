import { SocketService } from './../services/socket.service';
import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-applications-stats',
  templateUrl: './applications-stats.component.html',
  styleUrls: ['./applications-stats.component.scss']
})
export class ApplicationsStatsComponent implements OnInit {

  public stats: any[] = [];
  public loading = true;
  public sortedByGross = true; 

  constructor(
    private dataService: DataService,
    private socketService: SocketService
  ) { }

  ngOnInit() {
    this.getStats();
    this.socketService.get().subscribe(method => {
      console.log('Stats: ', method);
      if (method === 'getApplications') {
        this.getStats();
      }
      // if ( typeof this[method] === 'function' ) {
      //   this[method]();
      // }
    });
  }

  getStats(){
    this.stats = [];
    const date = new Date();
    const thisMonth = `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-01`;
    // console.log(thisMonth);
    const query = `query{
        users(where: { applications: {createdAt_gte: "${thisMonth}"} }){
            id
            fullName
            avatar{
              url
            }
            applications(where:  {createdAt_gte: "${thisMonth}"} ){
                id
                moneyIn
                approved
                invoiceOut
                invoicePaid
                createdAt
                price
                closed
                paid
            }
        }

        userSales: users(where: {blocked: false, applications: {closed: true}}){
          id
          fullName
          avatar{
            url
          }
          applications(where:  {closed: true, paid_ne: true} ){
              price
              closed
              paid
          }
       }
    }`;

    this.dataService.getData(query).subscribe(res => {
      if (res.data.users.length > 0) {
        const statsData: any[] = res.data.users;
        const statsSales: any[] = res.data.userSales;
        statsData.forEach(element => {
          let stats;
          stats = {
            id: element.id,
            name: element.fullName,
            avatar: element.avatar.length > 0 ? element.avatar['0'].url : '',
            applications: element.applications.length,
            moneyIn: element.applications.reduce((total, apps) => (apps.moneyIn === true ? total + 1 : total), 0),
            approvedSub: element.applications.reduce((total, apps) => (apps.approved === true ? total + 1 : total), 0),
            closed: element.applications.reduce((total, apps) => (apps.closed === true ? total + 1 : total), 0),
            invoiceOut: element.applications.reduce((total, apps) => (apps.invoiceOut === true ? total + 1 : total), 0),
            invoicePaid: element.applications.reduce((total, apps) => (apps.invoicePaid === true ? total + 1 : total), 0),
            grossSales: 0,
            price: element.applications.reduce((total, apps) => (apps.price && apps.approved === true ? total + apps.price : total), 0),
          };
          // statsSales.forEach(el => {
          //   console.log(el);
          //   if (element.id === el.id) {
          //     stats = {
          //       id: el.id,
          //       name: el.fullName,
          //       avatar: el.avatar.length > 0 ? el.avatar['0'].url : '',
          //       grossSales: el.applications.reduce((total, apps) => (apps.price ? total + apps.price : total), 0),
          //       applications: 0,
          //       moneyIn: 0,
          //       approved: 0,
          //       invoiceOut: 0,
          //       invoicePaid: 0,
          //       price: 0,
          //     };
          //   } else {
          //     stats = {
          //       id: element.id,
          //       name: element.fullName,
          //       avatar: element.avatar.length > 0 ? element.avatar['0'].url : '',
          //       applications: element.applications.length,
          //       moneyIn: element.applications.reduce((total, apps) => (apps.moneyIn === true ? total + 1 : total), 0),
          //       approved: element.applications.reduce((total, apps) => (apps.approved === true ? total + 1 : total), 0),
          //       invoiceOut: element.applications.reduce((total, apps) => (apps.invoiceOut === true ? total + 1 : total), 0),
          //       invoicePaid: element.applications.reduce((total, apps) => (apps.invoicePaid === true ? total + 1 : total), 0),
          //       grossSales: el.applications.reduce((total, apps) => (apps.price ? total + apps.price : total), 0),
          //       price: element.applications.reduce((total, apps) => (apps.price && apps.approved === true ? total + apps.price : total), 0),
          //     };
          //   }

          stats.approved = stats.approvedSub + stats.closed;
          this.stats.push(stats);
        });

        console.log(this.stats);

        statsSales.forEach(user => {
          if ( this.stats.some(el => el.id === user.id) ) {
            this.stats = this.stats.map(el => {
              if (el.id === user.id) {
                el.grossSales = user.applications.reduce((total, apps) => (apps.price ? total + apps.price : total), 0);
              }
              return el;
            });
          } else {
            const newStats = {
              id: user.id,
              name: user.fullName,
              avatar: user.avatar.length > 0 ? user.avatar['0'].url : '',
              grossSales: user.applications.reduce((total, apps) => (apps.price ? total + apps.price : total), 0),
              applications: 0,
              moneyIn: 0,
              approved: 0,
              invoiceOut: 0,
              invoicePaid: 0,
              price: 0,
            };
            this.stats.push(newStats);
          }
          // this.stats = this.stats.map(el => {
          //   console.log(`El Id: ${el.id}, new ID: ${user.id}`);
          //   if (el.id === user.id) {
          //     el.grossSales = user.applications.reduce((total, apps) => (apps.price ? total + apps.price : total), 0);
          //     return el;
          //   } else {
          //     return {
          //       id: user.id,
          //       name: user.fullName,
          //       avatar: user.avatar.length > 0 ? user.avatar['0'].url : '',
          //       grossSales: user.applications.reduce((total, apps) => (apps.price ? total + apps.price : total), 0),
          //       applications: 0,
          //       moneyIn: 0,
          //       approved: 0,
          //       invoiceOut: 0,
          //       invoicePaid: 0,
          //       price: 0,
          //     };
          //   }
          // });
        });

        this.stats.sort(this.sortPlacesGross);
        this.stats.sort(this.sortPlaces);
        this.loading = false;
        // console.log(this.stats);
      }
    });
  }

  sortPlacesGross(a, b) {
    if ((parseInt(b.price) + parseInt(b.grossSales)) < (parseInt(a.price) + parseInt(a.grossSales))){
      return -1;
    }
    if ((parseInt(b.price) + parseInt(b.grossSales)) > (parseInt(a.price) + parseInt(a.grossSales))){
      return 1;
    }
    return 0;
    // return parseInt(b.approved) - parseInt(a.approved)
  }

  sortPlaces(a, b) {
    if ( parseInt(b.approved) < parseInt(a.approved) ){
      return -1;
    }
    if ( parseInt(b.approved) > parseInt(a.approved) ){
      return 1;
    }
    return 0;
    // return parseInt(b.approved) - parseInt(a.approved)
  }

  place(place){
    // console.log(place);
    return parseInt(place) + 1;
  }

  sortBy(type){
    if(type == 'gross'){
      this.loading = true;
      this.stats.sort(this.sortPlaces);
      this.stats.sort(this.sortPlacesGross);
      this.loading = false;
    } else {
      this.loading = true;
      this.stats.sort(this.sortPlacesGross);
      this.stats.sort(this.sortPlaces);
      this.loading = false;
    }
    this.sortedByGross = !this.sortedByGross;
    console.log(type);
  }
}
