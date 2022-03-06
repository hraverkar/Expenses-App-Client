import { ICategory } from './../../interface/category';
import { NgxSpinnerService } from "ngx-spinner";
import { CategoryService } from './../../services/category.service';
import { Component, OnInit } from '@angular/core';
import { MatChip } from '@angular/material/chips';
import * as _ from 'lodash';

@Component({
  selector: 'app-add-expenses',
  templateUrl: './add-expenses.component.html',
  styleUrls: ['./add-expenses.component.scss']
})
export class AddExpensesComponent implements OnInit {
  public categories: ICategory[];
  public categoryValue: string;
  public dateValue: Date;
  public amountValue: number;
  public chip: MatChip;
  constructor(private categoryService: CategoryService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.getCategory();
  }

  public getCategory() {
    this.spinner.show();
    this.categoryService.getAllCategory().subscribe((res) => {
      this.categories = res.body;
      this.spinner.hide();
    });
  }

  public identify(index: any, item: any) {
    return item.id;
  }

  public changeSelected($event: any, category: ICategory): void {
    category.selected = $event.selected;
    this.categoryValue = category.value;
  }

  public addExpenses() {
    console.log(this.dateValue);
    console.log(this.amountValue);
    console.log(this.categoryValue);
    let t  = _.filter(this.categories, function(o) { return o.selected; });
    console.log(t);
  }
}
