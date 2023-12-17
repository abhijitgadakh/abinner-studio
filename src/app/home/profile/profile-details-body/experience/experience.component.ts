import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit {
  @Input() experienceData: any;
  selectedCheckbox!: number | null;
  public currenrexperienceData!: any;
  constructor() {}

  ngOnInit(): void {
    this.selectedCheckbox = this.experienceData.data.length;
    this.currenrexperienceData =
      this.experienceData.data[this.experienceData.data.length - 1];
  }
  onCheckboxChange(checkboxId: number): void {
    if (this.selectedCheckbox == checkboxId) {
      this.selectedCheckbox = this.experienceData.data.length;
      this.currenrexperienceData =
        this.experienceData.data[this.experienceData.data.length - 1];
    } else {
      this.selectedCheckbox = checkboxId;
      this.currenrexperienceData = this.experienceData.data[checkboxId - 1];
    }
  }

  isChecked(checkboxId: number): boolean {
    return this.selectedCheckbox === checkboxId;
  }
}
