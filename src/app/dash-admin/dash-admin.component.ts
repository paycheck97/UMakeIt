import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';
import { CarritoService } from '../carrito.service';
import { Food } from '../models/food';
import * as firebase from 'firebase/app'

@Component({
  selector: 'app-dash-admin',
  templateUrl: './dash-admin.component.html',
  styleUrls: ['./dash-admin.component.css']
})
export class DashAdminComponent implements OnInit {

  user: any;
  error: any;

  constructor(public authService: AuthService, public router: Router, private carritoService: CarritoService) {
   }
  isCollapsed = false;

  ngOnInit() {
  }
  onSubmitLogout(){
    { this.authService.logout()
      .then((res) =>{
        //agregar pop up de aceptar
        this.router.navigate(['/signin']);
      })
      .catch((err)=> this.error = err);  }
    
  }

}
