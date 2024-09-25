import { Component, OnInit } from '@angular/core';
import writeupsList from './writeups.json';
@Component({
  selector: 'app-writeups',
  templateUrl: './writeups.component.html',
  styleUrls: ['./writeups.component.css'],
})
export class WriteupsComponent implements OnInit {
  public pwriteupsCategories = writeupsList.categories;
  public writeupsList = writeupsList.quotes;
  public writeupsListAll = writeupsList.quotes;

  public selectedCategory: any = {};
  constructor() {}

  ngOnInit(): void {}
  filterByCategory(category: any) {
    this.selectedCategory = category;
    // this.writeupsList = writeupsList.quotes.filter((quote) =>
    //   quote.categories.includes(category.id)
    // );
  }
}
