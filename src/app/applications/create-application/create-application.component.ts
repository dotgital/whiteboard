import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from '../../data.service';
import { AuthService } from './../../services/auth.service';
import { Application } from 'src/app/applications/application';

@Component({
  selector: 'app-create-application',
  templateUrl: './create-application.component.html',
  styleUrls: ['./create-application.component.scss']
})
export class CreateApplicationComponent implements OnInit {

  public loading = false;
  public hide = true;
  public avatar;
  public task;
  public downloadURL;
  public date: string;
  public appType: string;
  private userId: string;

  createApplicationForm = new FormGroup({
    address: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    moneyIn: new FormControl(false),
    approved: new FormControl(false),
    denied: new FormControl(false),
    offerOut: new FormControl(false),
    listingAgreement: new FormControl(false),
    offerExecuted: new FormControl(false),
    closed: new FormControl(false),
    // invoicePaid: new FormControl(''),
  });

  public imageSrc;

  constructor(
    public dialogRef: MatDialogRef<CreateApplicationComponent>,
    private authService: AuthService,
    private dataService: DataService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    const user = this.authService.currentUserValue;
    this.userId = user.user.id;
    this.appType = this.data.applicationType;
    console.log(this.data.applicationType);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  createApplication() {
    const appData = `mutation{
        createApplication(input: {
        data: {
          address: "${this.createApplicationForm.value.address}",
          price: ${this.createApplicationForm.value.price},
          moneyIn: ${this.createApplicationForm.value.moneyIn},
          approved: ${this.createApplicationForm.value.approved},
          denied: ${this.createApplicationForm.value.denied},
          offerOut: ${this.createApplicationForm.value.offerOut},
          listingAgreement: ${this.createApplicationForm.value.listingAgreement},
          offerExecuted: ${this.createApplicationForm.value.offerExecuted},
          closed: ${this.createApplicationForm.value.closed},
          applicationType: ${this.appType},
          agent: "${this.userId}"
        }
      }) {
        application {
          address
          id
          agent {
            id
          }
        }
      }
    }`;

    this.dataService.createData(appData)
    .subscribe(res => {
      this.dialogRef.close();
    });
  }
}
