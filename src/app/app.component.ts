import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormArray, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;
  hobbiesArray = new FormArray([]);

  ngOnInit() {
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(null, Validators.required),
        email: new FormControl(null, [Validators.required, Validators.email])
      }),
      gender: new FormControl('male'),
      hobbies: this.hobbiesArray
    });
  }

  onSubmit(): void {
    console.log(this.signupForm);
  }

  addHobby(): void {
    this.hobbiesArray.push(new FormControl(null, Validators.required));
  }
}
