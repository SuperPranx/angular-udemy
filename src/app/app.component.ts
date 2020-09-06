import {Component, ViewChild} from '@angular/core';
import {NgForm, NgModel} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('formElement') formElement: NgForm;
  @ViewChild('email') email: NgModel;
  defaultQuestion = 'pet';
  answer: string;
  genders = ['male', 'female'];

  suggestUserName() {
    const suggestedName = 'Superuser';
    this.formElement.setValue({
      userData: {
        username: suggestedName,
        email: ''
      },
      secret: 'pet',
      questionAnswer: '',
      gender: 'female'
    });
  }

  onSubmit() {
    console.log(this.formElement);
  }
}
