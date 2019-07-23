import {Component, EventEmitter, Input, OnInit, Output, SimpleChange} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../user';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input() user: User;
  @Output() onSubmit = new EventEmitter<User>();

  angForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      id: [null],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: ['', Validators.required]
    });
  }

  addUser(user: User) {
    this.onSubmit.emit(user);
    this.angForm.reset();
  }

  ngOnChanges(change: SimpleChange) {
    if (change.user.currentValue !== undefined) {
      this.angForm.setValue({
        id: change.user.currentValue.id,
        firstName: change.user.currentValue.firstName,
        lastName: change.user.currentValue.lastName,
        address: change.user.currentValue.address
      });
    }
  }

  ngOnInit() {
  }

}
