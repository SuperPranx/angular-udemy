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
  username: string;
  secret: string;
  answer: string;

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  onSubmit() {
    console.log(this.formElement);
  }
}
