import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import { CarritoService } from '../carrito.service';
import { Food } from '../models/food';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public authService: AuthService, public router: Router, private carritoService: CarritoService) { }
  isCollapsed = false;
  carrito: Food[] = this.carritoService.getCarrito();

  selectChangeHandler(event: any, plato:Food){
    if(event.target.value == '0'){
      var i = this.carrito.indexOf(plato)
      this.carrito.splice(i, 1);
    }else this.selectedOption = event.target.value;
  }

  selectedOption = '';
  onSubmitLogout(){
    
  }
  ngOnInit() {
  }

}
