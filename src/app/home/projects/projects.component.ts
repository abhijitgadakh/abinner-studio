import { Component, OnInit } from '@angular/core';
import projectsList from './projects.json';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  public projectCategories = projectsList.categories;
  public projectList = projectsList.projects;
  public projectListAll = projectsList.projects;

  public selectedCategory: any = {};

  constructor() {}

  ngOnInit(): void {}

  filterByCategory(category: any) {
    console.log(category);
    this.selectedCategory = category;
    this.projectList = this.projectListAll.filter((project) => {
      return this.selectedCategory.id === project.categoryId;
    });
    console.log(this.projectList);
  }
}
