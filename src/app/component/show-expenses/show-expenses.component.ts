import { IExpenseInfo } from './../../interface/expense-info';
import { ExpenseService } from './../../services/expense.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-expenses',
  templateUrl: './show-expenses.component.html',
  styleUrls: ['./show-expenses.component.scss']
})
export class ShowExpensesComponent implements OnInit {
  public showAllExpenses: IExpenseInfo[];
  public page: any;
  constructor(private expenseService: ExpenseService) { }

  ngOnInit(): void {
    this.getAllExpenses();
  }

  public getAllExpenses() {
    this.expenseService.getAllExpenses().subscribe((res) => {
      this.showAllExpenses = res.body;
    });
  }

  public drop(event: CdkDragDrop<{ title: string; poster: string }[]>) {
    moveItemInArray(this.showAllExpenses, event.previousIndex, event.currentIndex);
  }
}
