import { Injectable } from '@angular/core';
import { LoaderDialogComponent } from '../shared/components/loader-dialog/loader-dialog.component';
import {MatDialog} from '@angular/material/dialog'
@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor(private dialog: MatDialog) { }

  show(){
    const dialogRef = this.dialog.open(LoaderDialogComponent, {
      data: { },
      height: '200px',
      width: '200px',
      // hasBackdrop: false,
      disableClose: true,
    });
  }

  hide(){
    this.dialog.closeAll();
  }
}
