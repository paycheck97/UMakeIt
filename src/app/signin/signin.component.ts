import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import { getDefaultService } from 'selenium-webdriver/opera';

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
  public name: string;
  error:any;
  constructor(public authService: AuthService, public router: Router) { }

  onSubmitSignIn() { { this.authService.loginEmail(this.email, this.password)
    .then((res) =>{
      this.router.navigate(['/dashboard']);
      this.authService.getUserPos();
 
    })
    .catch((err)=> this.error = err);  }}
    onSubmitAddUser() { { this.authService.registerUser(this.emailRe, this.passwordRe, this.name)
      .then((res) =>{
        //agregar pop up de aceptar
        
      })
      .catch((err)=> this.error = err);  }}
     onSubmitGoogleLogin() { { this.authService.loginGoogle()
      .then((res) =>{
        this.router.navigate(['/dashboard']);
      })
      .catch((err)=> this.error = err);  }}
      onSubmitForgot() { { this.authService.forgotPassword(this.email)
        .then((res) =>{
          this.router.navigate(['/dashboard']);
          
        })
        .catch((err)=> this.error = err);  }}

  ngOnInit() {
  }

}
