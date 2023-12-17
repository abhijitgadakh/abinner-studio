import { Component, OnInit } from '@angular/core';
import profile from './profile.json';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  public profileCategories = profile.categories;
  public profileData = profile;
  public selectedCategory: any = {};
  constructor() {}

  ngOnInit(): void {}

  filterByCategory(category: any) {
    this.selectedCategory = category;
  }
}
