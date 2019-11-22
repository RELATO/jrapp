import { Component, OnInit, Optional, Inject  } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.scss']
})
export class FormModalComponent implements OnInit {

  constructor(private _dialogRef: MatDialogRef<FormModalComponent>,
              @Optional() @Inject(MAT_DIALOG_DATA) public data: any) {
              }
  ngOnInit() {
    console.log('init');
  }

  close() {
    this._dialogRef.close();
  }
}
