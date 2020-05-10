import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-odd',
  template: '<p style="background-color: lightgreen">Odd - {{ givenNumber }}</p>'
})
export class OddComponent implements OnInit {
  @Input() givenNumber: number;

  constructor() { }

  ngOnInit() {
  }

}
