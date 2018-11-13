import { Injectable } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth'
import * as firebase from 'firebase/app'
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afAuth: AngularFireAuth) { }
  logout(){
    return this.afAuth.auth.signOut();
  }
  registerUser(emailRe: string, passwordRe: string){
    return new Promise((resolve, reject) => {
        this.afAuth.auth.createUserWithEmailAndPassword(emailRe, passwordRe)
        .then( userData => resolve(userData),
        err => reject(err));
    });
  }
  loginEmail(email: string, password: string){
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then( userData => resolve(userData),
      err => reject(err));
  });
  }
  getAuth(){
    return this.afAuth.authState.pipe(map(auth => auth));
  }

  

}