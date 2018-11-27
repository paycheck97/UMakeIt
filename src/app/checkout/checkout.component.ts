import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../carrito.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private carritoService: CarritoService) { }

  carrito = this.carritoService.getCarrito();

  total = this.carritoService.getTotal();

  emptyCart(){
    this.carrito = [];
  }

  ngOnInit() {
  }

}
