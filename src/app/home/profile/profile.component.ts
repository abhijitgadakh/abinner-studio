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

  ngOnInit(): void {
    // this.profileData.academics.data.sort(function (a, b) {
    //   return b.id - a.id;
    // });
    // this.profileData.experience.data.sort(function (a, b) {
    //   return b.id - a.id;
    // });
    // this.profileData.achievement.data.sort(function (a, b) {
    //   return a.id - b.id;
    // });
    // this.profileData.extracurricular_activities.data.sort(function (a, b) {
    //   return a.id - b.id;
    // });
  }

  filterByCategory(category: any) {
    this.selectedCategory = category;
  }
}
