import { Injectable } from '@angular/core';
import { Food } from './models/food';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  constructor() { }

  carrito = [];
  
  addCarrito(plato: Food){
    plato.cant = 1;
    this.carrito.push(plato);
    
  }

  getCarrito(){
    return this.carrito;
  }


}
