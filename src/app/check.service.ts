import { Injectable } from '@angular/core';
import { Observable, observable} from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {map} from 'rxjs/operators';
import {take} from 'rxjs/operators';
import { AuthService } from './auth.service';
import * as firebase from 'firebase/app'


@Injectable({
  providedIn: 'root'
})
export class CheckService implements CanActivate{
  name: any
  constructor(
    private auth: AuthService,
    private router: Router,
    public afAuth: AngularFireAuth,
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      // handle any redirects if a user isn't authenticated
      if (!firebase.auth().currentUser) {
        // redirect the user
        this.router.navigate(['/signin']);
        console.log('no entro')
        return false;
      }
      
      return true;
  }
}