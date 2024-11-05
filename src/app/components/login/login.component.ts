import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { user } from '../../models/user';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  emailFormControl= new FormControl('', [ Validators.required, Validators.email, ]);
  passwordFormControl=new FormControl('', [ Validators.required, Validators.required, ]);

  user:user;



  login(){}

}
