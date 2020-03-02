import { DataService } from './../../data.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  public message = '';
  public loading: boolean;



  constructor(
    private dialogRef: MatDialogRef<MessageComponent>,
    private dataService: DataService,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit() {
    if(this.data){
      this.message = this.data.message;
    }
  }

  onSubmit(){
    this.loading = true;
    const appData = `mutation {
      updateStatic(input: {
        where: {
          id: "5e5702eda23dfc62fc1bcf4d"
        },
        data: {
          whiteBoardMessage: "${this.message}"
        }
      }) {
        static {
          whiteBoardMessage
        }
      }
    }`;

    this.dataService.updateData(appData).subscribe((res) => {
      this.loading = false;
      this.dialogRef.close(this.message);
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
