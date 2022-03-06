import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddExpensesComponent } from './component/add-expenses/add-expenses.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client';
  constructor(public dialog: MatDialog) { }

  public addExpanses() {
    const dialogRef = this.dialog.open(AddExpensesComponent, {
      data: {},
      hasBackdrop: false
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

