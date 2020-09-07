import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;
  hobbiesArray = new FormArray([]);
  forbiddenUsernames = ['asd', 'qwe', 'zxc'];

  ngOnInit() {
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        email: new FormControl(null, [Validators.required, Validators.email], this.fobiddenEmails)
      }),
      gender: new FormControl('male'),
      hobbies: this.hobbiesArray
    });
    
    // this.signupForm.valueChanges.subscribe(
    //   value => {
    //     console.log(value);
    //   }
    // );
    this.signupForm.statusChanges.subscribe(
      value => {
        console.log(value);
      }
    );
  }

  onSubmit(): void {
    console.log(this.signupForm);
  }

  addHobby(): void {
    this.hobbiesArray.push(new FormControl(null, Validators.required));
  }

  forbiddenNames(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenUsernames.indexOf(control.value) >= 0) {
      return {nameIsForbidden: true};
    }
    return null;
  }

  fobiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    return new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({emailIsForbidden: true});
        } else {
          resolve(null);
        }
      }, 2000);
    });
  }
}
