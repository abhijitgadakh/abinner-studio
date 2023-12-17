import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-academics',
  templateUrl: './academics.component.html',
  styleUrls: ['./academics.component.css'],
})
export class AcademicsComponent implements OnInit {
  @Input() academicsData: any;
  selectedCheckbox!: number | null;
  public currenrAcademicsData!: any;
  constructor() {}

  ngOnInit(): void {
    this.selectedCheckbox = this.academicsData.data.length;
    this.currenrAcademicsData =
      this.academicsData.data[this.academicsData.data.length - 1];
  }

  onCheckboxChange(checkboxId: number): void {
    if (this.selectedCheckbox == checkboxId) {
      this.selectedCheckbox = this.academicsData.data.length;
      this.currenrAcademicsData =
        this.academicsData.data[this.academicsData.data.length - 1];
    } else {
      this.selectedCheckbox = checkboxId;
      this.currenrAcademicsData = this.academicsData.data[checkboxId - 1];
    }
  }

  isChecked(checkboxId: number): boolean {
    return this.selectedCheckbox === checkboxId;
  }
}
