import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-extracurricular',
  templateUrl: './extracurricular.component.html',
  styleUrls: ['./extracurricular.component.css'],
})
export class ExtracurricularComponent implements OnInit {
  @Input() extracurricularData: any;
  constructor() {}

  ngOnInit(): void {}
}
