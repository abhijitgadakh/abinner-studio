import { Component, Input, OnInit } from '@angular/core';
// import * as proJson from 'src/app/home/projects/

@Component({
  selector: 'app-project-cards',
  templateUrl: './project-cards.component.html',
  styleUrls: ['./project-cards.component.css'],
})
export class ProjectCardsComponent implements OnInit {
  @Input() projects: any;
  @Input() projectsAll: any;

  @Input() selectedCategory: any;
  constructor() {}

  ngOnInit(): void {}

  clearFilter() {
    this.projects = this.projectsAll;
    this.selectedCategory = {};
  }
}
