import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username: string;
  email: string;
  secret: string;

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  onSubmit(formElement: NgForm) {
    console.log(formElement);
  }
}
