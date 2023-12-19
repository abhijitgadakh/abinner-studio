import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-windows',
  templateUrl: './modal-windows.component.html',
  styleUrls: ['./modal-windows.component.css'],
})
export class ModalWindowsComponent implements OnInit {
  public modalView: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  closeModal() {
    this.modalView = false;
  }
  openModal() {
    this.modalView = true;
  }
}
