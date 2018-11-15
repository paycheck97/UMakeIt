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
  
  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      // handle any redirects if a user isn't authenticated
      if (!firebase.auth().currentUser) {
        // redirect the user
        this.router.navigate(['/signin']);
        return false;
      }
      console.log('mal')
      return true;
  }
}