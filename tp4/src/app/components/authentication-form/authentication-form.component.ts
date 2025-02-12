import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-authentication-form',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './authentication-form.component.html',
  styleUrl: './authentication-form.component.scss'
})
export class AuthenticationFormComponent {
  email: String = '';
  password: String = '';

  submit(form: NgForm) {
    console.log("authenticated with success!", form.value);
  }

}
