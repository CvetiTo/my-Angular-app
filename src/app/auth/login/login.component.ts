import { Component, OnInit } from '@angular/core';
//import { Router } from '@angular/router';
//import {
//  Auth,
//  signInWithEmailAndPassword
//} from '@angular/fire/auth';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    public authService: AuthService,
    
  ) { }

  ngOnInit(): void { }

 // handleLogin(value: any) {
 //   signInWithEmailAndPassword(this.auth, value.email, value.password)
 //     .then((response: any) => {
 //       console.log(response.user)
 //       this.router.navigate(['/']);
 //     })
 //     .catch((err) => {
 //       alert(err.message);
 //     })
 // }
  //constructor(private userService: UserService, private router: Router, 
  //  private activatedRoute: ActivatedRoute) {
  //
  // }
  //
  //handlelogin(form: NgForm): void {
  //  if(form.invalid) { return; }
  //  const user = form.value;
  //  //console.log(form.value)
  //  this.userService.login(user).subscribe({
  //    next: user => {
  //      console.log(user._id)
  //      this.router.navigate(['/home']);
  //    },
  //    error: (err) => {
  //      console.log(err);
  //    }
  //    
  //  });

  //}

}
