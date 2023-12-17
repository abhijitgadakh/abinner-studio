import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-writeups-cards',
  templateUrl: './writeups-cards.component.html',
  styleUrls: ['./writeups-cards.component.css'],
})
export class WriteupsCardsComponent implements OnInit {
  @Input() writeupsList: any;
  @Input() writeupsListAll: any;
  @Input() selectedCategory: any;
  constructor() {}

  ngOnInit(): void {}

  clearFilter() {
    this.writeupsList = this.writeupsListAll;
    this.selectedCategory = {};
  }
}
