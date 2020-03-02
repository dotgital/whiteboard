import { Router } from '@angular/router';
import { Component, OnInit, NgZone } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private router: Router,
    private zone: NgZone
  ) { }

  ngOnInit() {
    this.zone.run(() => this.router.navigateByUrl('/dashboard/applications-dashboard'))
  }

}
