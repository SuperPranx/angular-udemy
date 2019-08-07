import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-responsive-data-button',
  templateUrl: './responsive-data-button.component.html',
  styleUrls: ['./responsive-data-button.component.css']
})
export class ResponsiveDataButtonComponent implements OnInit {
  username = '';

  constructor() { }

  ngOnInit() {
  }

  isUsernameEmpty() {
    return this.username === '';
  }

  resetUsername() {
    this.username = '';
  }
}
