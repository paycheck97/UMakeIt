import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  public email: string;
  public password: string;
  public emailRe: string;
  public passwordRe: string;
  constructor(public authService: AuthService, public router: Router) { }

  onSubmitSignIn() { { this.authService.loginEmail(this.email, this.password)
    .then((res) =>{
      console.log('Bien');
      this.router.navigate(['/dashboard']);
      
    })
    .catch((err)=>
    console.log(err)) } }
    onSubmitAddUser() { { this.authService.registerUser(this.emailRe, this.passwordRe)
      .then((res) =>{
        //agregar pop up de aceptar
      })
      .catch((err)=>
      console.log(err)) ; 
      ;
     } }


  ngOnInit() {
  }

}
