import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  readonly subscriptionTypes = ['Basic', 'Advanced', 'Pro'];
  @ViewChild('formElement') formElement: NgForm;

  formData: {
    email: '',
    subType: '',
    password: ''
  };

  handleSubmission() {
    this.formData = this.formElement.value.formData;
    console.log(this.formData);
    this.formElement.reset();
  }
}
