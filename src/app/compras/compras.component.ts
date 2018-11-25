import { Component, OnInit } from '@angular/core';

import { PedidosService } from '../pedidos.service';
import { Pedidos } from '../models/pedidos';
import { CarritoService } from '../carrito.service';
import { Food } from '../models/food';


@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent implements OnInit {

  pedidos:Pedidos[];

  
  constructor(private pedidosService:PedidosService) { 
   }



   status(pedido:Pedidos){
     var aux = "On Queue";
    if(pedido.status){
      aux = "Dispatched"
    }
    return aux;
   }

   changeStatus(pedido: Pedidos){
    pedido.status = !pedido.status;
    this.pedidosService.updatePedido(pedido);
  }



   ngOnInit() {
    this.pedidosService.getPlatos().subscribe(pedidos => {
      //console.log(platos);
      //this.filter(food);
      this.pedidos = pedidos;
    });
  }


}