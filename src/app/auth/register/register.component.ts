import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  
  constructor(
    public authService: AuthService,
    private fb: FormBuilder,
    
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.pattern("^([a-zA-Z]+)@([a-zA-Z]+)\.([a-zA-Z]+)$")]],
      password: ['', [Validators.required, Validators.minLength(3), ]],
      rePass: ['', [Validators.required,  ]]
    })
   }

  ngOnInit(): void {
  }
  onPasswordChange() {
    if (this.rePass.value == this.password.value) {
      this.rePass.setErrors(null);
    } else {
      this.rePass.setErrors({ mismatch: true });
    }
  }
  
  // getting the form control elements
  get password(): AbstractControl {
    return this.form.controls['password'];
  }
  
  get rePass(): AbstractControl {
    return this.form.controls['rePass'];
  }
  
  clearForm(): void {
    this.form.reset();
  }
  
}
