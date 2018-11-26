import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../auth.service';


@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {
  public email: string;
  public name: string;
  error: any;

  constructor(public authService: AuthService, public router: Router) { }

  onSubmitAddAdmin() { { this.authService.registerAdmin(this.email, 'password')
    .then((res) =>{
      //agregar pop up de aceptar
    })
    .catch((err)=> this.error = err);  }}

  ngOnInit() {
  }

}
