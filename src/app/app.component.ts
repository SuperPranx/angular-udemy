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
  submitted = false;

  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  };

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.formElement.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'female'
    // });
    this.formElement.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }

  onSubmit() {
    this.submitted = true;
    this.user.username = this.formElement.value.userData.username;
    this.user.email = this.formElement.value.userData.email;
    this.user.secretQuestion = this.formElement.value.secret;
    this.user.answer = this.formElement.value.questionAnswer;
    this.user.gender = this.formElement.value.gender;

    this.formElement.reset();
  }
}
