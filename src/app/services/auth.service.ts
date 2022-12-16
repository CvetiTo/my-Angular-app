import { Injectable } from '@angular/core';

import {
  Auth,
  signOut,
  UserInfo,
  updateProfile,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from '@angular/fire/auth';
import { concatMap, from, Observable, of, switchMap } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: any;
  constructor(
    public auth: Auth,
    public router: Router,

  ) {
    this.auth.onAuthStateChanged((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!);
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    });
  }

  SignIn(value: any) {
    signInWithEmailAndPassword(this.auth, value.email, value.password)
      .then((response: any) => {
        console.log(response.user)
        this.router.navigate(['/']);
      })
      .catch((err) => {
        alert(err.message);
      })

  }
  SignUp(value: any) {
    createUserWithEmailAndPassword(this.auth, value.email, value.password)
      .then((response: any) => {
        this.router.navigate(['/']);
        return response.user;
        //console.log(response.user)
      })
      .catch((err) => {
        alert(err.message);
      })
  }



  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return (user !== null) ? true : false;
  }

  updateProfileData(profileData: Partial<UserInfo>): Observable<any>{
    const user = this.auth.currentUser;
    return of(user).pipe(
      concatMap(user => {
        if (!user) throw new Error('Not authenticated');

       return updateProfile(user, profileData);
      })
    )
  }
 
  SignOut() {
    signOut(this.auth)
      .then(() => {
        localStorage.removeItem('user');
        this.router.navigate(['/']);
      })
      .catch((err) => {
        alert(err.message);
      })
  }
}


