import { Injectable } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireDatabase } from 'angularfire2/database';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import {map} from 'rxjs/operators';

import { Observable, of } from 'rxjs';
import { switchMap} from 'rxjs/operators';


interface User {
  uid: string;
  email: string;
  name?: string;
  admin?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  value: any;
  id: string;
  user: Observable<User>;
  ref = firebase.firestore().collection('Users');
  userRef: any;

  constructor(public afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router,
    private db: AngularFireDatabase) { 
      this.user = this.afAuth.authState.pipe(
        switchMap(user => {
          if (user) {
            return this.afs.doc<User>(`users/${user.uid}`).valueChanges()
          } else {
            return of(null)
          }
        })
      )
    }
  
  logout(){
    return this.afAuth.auth.signOut();
  }
  registerUser(emailRe: string, passwordRe: string, name: string){
    return new Promise((resolve, reject) => {
        this.afAuth.auth.createUserWithEmailAndPassword(emailRe, passwordRe)
        .then( userData => {resolve(userData); this.updateUserData(userData.user);},
        err => reject(err));
    });
  }
  registerAdmin(emailRe: string, passwordRe: string){
    return new Promise((resolve, reject) => {
        this.afAuth.auth.createUserWithEmailAndPassword(emailRe, passwordRe)
        .then( userData => {resolve(userData); this.updateAdminData(userData.user);},
        err => reject(err));
    });
  }
  loginEmail(email: string, password: string){
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then( userData => {resolve(userData); firebase.auth.Auth.Persistence.LOCAL},
      err => reject(err));
      
  });
  
  }
  getAuth(){
    return this.afAuth.authState.pipe(map(auth => auth));
  }

  loginGoogle(){
    return new Promise((resolve, reject) => {
      let provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');
      this.afAuth.auth
      .signInWithPopup(provider)
      .then( userData => {resolve(userData); this.updateUserData(userData.user);},
      err => reject(err));
  });}

  getUser(){
    var user = firebase.auth().currentUser;

    if (user) {
      // User is signed in.
    } else {
      // No user is signed in.
    }
    return user.email;
  }

  forgotPassword(email: string){
    return new Promise((resolve, reject) => {
      this.afAuth.auth.sendPasswordResetEmail(email);
  });

  }

  updateUserData(user) {
    // Sets user data to firestore on login

    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`Users/${user.uid}`);

    const data: User = {
      uid: user.uid,
      email: user.email,
      name: user.displayName,
      admin: false
    }

    return userRef.set(data, { merge: true })

  }

  updateAdminData(user) {
    // Sets user data to firestore on login

    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`Users/${user.uid}`);

    const data: User = {
      uid: user.uid,
      email: user.email,
      name: user.displayName,
      admin: true
    }

    return userRef.set(data, { merge: true })

  }

  getUserPos(): Observable<any> {
    
    this.id = this.afAuth.auth.currentUser.uid;
    this.userRef = this.afs.collection('Users').doc(this.id).get()
    console.log(this.afs.collection('Users').doc(this.id));
    return new Observable((observer) => {
      this.userRef.then((doc) => {
        let data = doc.data();
        console.log(data.admin);
        
      });
    });
  }
  
}