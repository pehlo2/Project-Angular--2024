import { Injectable } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatConfirmDialogComponent } from '../mat-confirm-dialog/mat-confirm-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) {

  }
  openConfirmDialog() {
   return this.dialog.open(MatConfirmDialogComponent, {
      width: '300px',
      panelClass: 'confirm-dialog-container',
      disableClose: true,
    })
  }
}
