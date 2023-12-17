import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-category-listing',
  templateUrl: './category-listing.component.html',
  styleUrls: ['./category-listing.component.css'],
})
export class CategoryListingComponent implements OnInit {
  @Input() categories: any;
  @Output() selectedCategory: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}
  selectCategory(category: any) {
    console.log(category.name);
    this.selectedCategory.emit(category);
  }
}
