import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Router, ActivatedRoute}  from '@angular/router';
import { FsService } from '../fs.service';
import { Admin } from '../models/admin';

import { getDefaultService } from 'selenium-webdriver/opera';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  admins: Admin[];   
  admin= {};
  public email: string;
  public password: string;
  public emailRe: string;
  public passwordRe: string;
  public name: string;
  error:any;
  user: any;
  constructor(public authService: AuthService, public router: Router, private fs: FsService, private route: ActivatedRoute) { }

  onSubmitSignIn() { { this.authService.loginEmail(this.email, this.password)
    .then((res) =>{
      if(this.user = this.authService.getUserVerified())
      {
        this.router.navigate(['/admin']);
      }
      else{
        this.router.navigate(['/dashboard']);
      }
      
      
     
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
      getPlatoDetails(id) {
        this.fs.getPlato(id)
          .subscribe(data => {
            console.log(data);
            console.log(this.admin = data.admin);
          });
      }

        

  ngOnInit() {
    this.fs.getAdmins().subscribe(Admin => {
      //console.log(platos);
      //this.filter(food);
      this.admins = Admin;
      this.getPlatoDetails(this.route.snapshot.params['id']);
    });
    
  }

}
