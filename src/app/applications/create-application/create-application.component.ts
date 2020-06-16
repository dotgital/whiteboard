import { User } from './../../models/user';
import { EmailTemplates } from './../../models/emailTemplates';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from '../../data.service';
import { AuthService } from './../../services/auth.service';
import { Application } from 'src/app/applications/application';
const template = require ('src/assets/commission_template.js');

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
  public commissionType: string;
  public emailTemplate = new EmailTemplates();
  public user: User;
  public updating = false;
  public userRole: string;

  createApplicationForm = new FormGroup({
    address: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    commissionType: new FormControl(null),
    moneyIn: new FormControl(false),
    approved: new FormControl(false),
    denied: new FormControl(false),
    offerOut: new FormControl(false),
    listingAgreement: new FormControl(false),
    offerExecuted: new FormControl(false),
    invoiceOut: new FormControl(false),
    invoicePaid: new FormControl(false),
    paid: new FormControl(false),
    closed: new FormControl(false),
    tenant: new FormControl(null),
    landlord: new FormControl(null),
    monthRent: new FormControl(null),
    commissionPorcentage: new FormControl(null),
    applicationFeeNumber: new FormControl(null),
    applicationFeeAmount: new FormControl(null),
    applicationFeeTotal: new FormControl({value: null, disabled: true}),
    notes: new FormControl(null),
    bonuses: new FormControl(null),
    landlordCommissionRate: new FormControl(null),

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
    this.userRole = user.user.role.name;
    this.user = user;
    this.appType = this.data.applicationType;
    if (this.data.data) {
      this.updating = true;
      this.createApplicationForm.patchValue(this.data.data);
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  updateApplication() {
    const appData = `mutation{
      updateApplication(input: {where: {
          id: "${this.data.data.id}"
        },
        data: {
          address: "${this.createApplicationForm.value.address}",
          price: ${this.createApplicationForm.value.price},
          moneyIn: ${this.createApplicationForm.value.moneyIn},
          approved: ${this.createApplicationForm.value.approved},
          denied: ${this.createApplicationForm.value.denied},
          offerOut: ${this.createApplicationForm.value.offerOut},
          listingAgreement: ${this.createApplicationForm.value.listingAgreement},
          offerExecuted: ${this.createApplicationForm.value.offerExecuted},
          invoiceOut: ${this.createApplicationForm.value.invoiceOut},
          invoicePaid: ${this.createApplicationForm.value.invoicePaid},
          paid: ${this.createApplicationForm.value.paid},
          closed: ${this.createApplicationForm.value.closed},
          applicationType: ${this.appType}
        }
      }) {
        application {
          id
        }
      }
    }`;

    this.dataService.updateData(appData)
    .subscribe(res => {
      // this.sendEmailNotification();
      this.dialogRef.close();
    });
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
      // this.sendEmailNotification();
      this.dialogRef.close();
    });
  }

  deleteApp() {
    this.dataService.deleteApp(this.data.data.id).subscribe(res => {
      this.dialogRef.close();
    });
  }

  onCommissionChange(e) {
    this.commissionType = e.value;
    // console.log(e);
  }

  calculateTotal() {
    console.log(this.createApplicationForm.value.applicationFeeNumber);
    const total = this.createApplicationForm.value.applicationFeeNumber * this.createApplicationForm.value.applicationFeeAmount;
    this.createApplicationForm.patchValue({applicationFeeTotal: total});
  }
}
