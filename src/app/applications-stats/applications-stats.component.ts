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

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.getStats();
  }

  getStats(){
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
            }
        }
    }`;

    this.dataService.getData(query).subscribe(res => {
      if (res.data.users.length > 0) {
        const statsData: any[] = res.data.users;
        statsData.forEach(element => {
          // console.log(element);
          const stats = {
            id: element.id,
            name: element.fullName,
            avatar: element.avatar.length > 0 ? element.avatar['0'].url : '',
            applications: element.applications.length,
            moneyIn: element.applications.reduce((total, apps) => (apps.moneyIn === true ? total + 1 : total), 0),
            approved: element.applications.reduce((total, apps) => (apps.approved === true ? total + 1 : total), 0),
            invoiceOut: element.applications.reduce((total, apps) => (apps.invoiceOut === true ? total + 1 : total), 0),
            invoicePaid: element.applications.reduce((total, apps) => (apps.invoicePaid === true ? total + 1 : total), 0),
            price: element.applications.reduce((total, apps) => (apps.price ? total + apps.price : total), 0),
          };
          this.stats.push(stats);
        });
        this.stats.sort((a,b) => (a.applications > b.applications) ? -1 : ((b.applications > a.applications) ? 1 : 0));
        this.loading = false;
        // console.log(this.stats);
      }
    });
  }

  place(place){
    return parseInt(place) + 1;
  }
}
