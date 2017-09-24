import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Injectable()
export class AuthenticationService {
  user$: Observable<firebase.User>;

  constructor(
    private router: Router,
    private angularFireAuth: AngularFireAuth
  ) {
    this.angularFireAuth.auth.signOut();
    this.user$ = this.angularFireAuth.authState;
  }

  register(email: string, password: string) {
    this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((user: firebase.User) => {
        if (!user.emailVerified) {
          user.sendEmailVerification();
        }
      })
      .catch(error => console.log('unable to sign up', error));
  }

  forgotPassword(email: string) {
    this.angularFireAuth.auth.sendPasswordResetEmail(email)
      .then(_ => console.log('email sent'))
      .catch(error => console.log('reset password error', error));
  }

  signIn(email: string, password: string) {
    this.angularFireAuth.auth.signInWithEmailAndPassword(email, password)
      .then(_ => {
        this.router.navigate(['/home']);
        console.log('logged in!');
      })
      .catch(error => console.log('auth error', error));
  }

  logout() {
    this.angularFireAuth.auth.signOut();
  }

}
