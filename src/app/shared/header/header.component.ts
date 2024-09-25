import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  downloadPDF() {
    const link = document.createElement('a');
    link.href = 'assets/abhijit_gadakh_resume.pdf'; // Relative path to your PDF in the assets folder
    link.download = 'abhijit_gadakh_resume.pdf'; // The name to give the downloaded file
    link.click();
    window.open('assets/abhijit_gadakh_resume.pdf', '_blank');
  }
}
