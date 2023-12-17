import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-details-body',
  templateUrl: './profile-details-body.component.html',
  styleUrls: ['./profile-details-body.component.css'],
})
export class ProfileDetailsBodyComponent implements OnInit {
  @Input() selectedDetails: any;
  @Input() profileData: any;
  public academicsData = {};
  public experienceData = {};
  public achievementData = {};
  public extracurricularData = {};

  constructor() {}

  ngOnInit(): void {
    this.academicsData = this.profileData['academics'];
    this.experienceData = this.profileData['experience'];
    this.achievementData = this.profileData['achievement'];
    this.extracurricularData = this.profileData['extracurricular_activities'];
  }
}
