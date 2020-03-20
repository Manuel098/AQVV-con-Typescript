import { Component, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Globals } from '../../../globals';

export interface DialogData {
  name: string;
  id: string;
}

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent {
  name: string;
  id: string;
  constructor(public dialogRef: MatDialogRef<DeleteComponent>,@Inject(MAT_DIALOG_DATA) public data: DialogData, private globals: Globals) {
    this.name = data.name;
    this.id = data.id;
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
