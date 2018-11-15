import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../carrito.service';
import { Food } from '../models/food';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {


  
  constructor(private carritoService: CarritoService) { }


  carrito: Food[] = this.carritoService.getCarrito();

  selectChangeHandler(event: any, plato:Food){
    if(event.target.value == '0'){
      var i = this.carrito.indexOf(plato)
      this.carrito.splice(i, 1);
    }else this.selectedOption = event.target.value;
  }

  selectedOption = '';


  ngOnInit() {
  }

}