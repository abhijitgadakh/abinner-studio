import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css'],
})
export class ProfileDetailsComponent implements OnInit {
  @Input() selectedCategory: any;
  @Input() profileData: any;
  constructor() {}

  ngOnInit(): void {
    if (this.selectedCategory.id == undefined) {
      this.selectedCategory = this.profileData.categories.find(
        (category: any) => category.id === 1
      );
    }
    // console.log(this.profileData[this.selectedCategory.code]);
  }
}
