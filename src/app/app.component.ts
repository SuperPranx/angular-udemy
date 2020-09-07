import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  readonly subscriptionTypes = ['Basic', 'Advanced', 'Pro'];
  formData: {
    email: '',
    subType: '',
    password: ''
  };

  handleSubmission(form: NgForm) {
    this.formData = form.value.formData;
    console.log(this.formData);
    form.reset();
  }
}
