import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { of } from 'rxjs';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit {
  possibleStatuses = ['Stable', 'Critical', 'Finished'];

  formGroupObject: FormGroup;

  constructor() { }

  get isValid() {
    return this.formGroupObject.valid;
  }

  ngOnInit(): void {
    this.formGroupObject = new FormGroup({
      'projectName': new FormControl(null, Validators.required, this.validateName.bind(this)),
      'projectMail': new FormControl(null, [Validators.required, Validators.email]),
      'projectStatus': new FormControl(this.possibleStatuses[0])
    });
  }

  validateName(control: FormControl): Promise<{[key: string]: boolean}> {
    if (control.value === 'Test') {
      return of({'invalidProjectName': true}).toPromise();
    }
    return of(null).toPromise();
  }

  onSubmit() {
    console.log(this.formGroupObject.get('projectName').value, this.formGroupObject.get('projectMail').value, this.formGroupObject.get('projectStatus').value);
  }
}
