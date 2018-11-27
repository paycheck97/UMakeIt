import { Component, OnInit } from '@angular/core';
import { PedidosService } from '../pedidos.service';
import { Pedidos } from '../models/pedidos';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {

  constructor(private pedidosService:PedidosService, private authService:AuthService) { }

  pedidos:Pedidos[];
  pedidosUser:Pedidos[]=[];

  sortPedidos(){
    for(let pedido of this.pedidos){
      if(pedido.mail == this.authService.getUserMail()){
        this.pedidosUser.push(pedido);
      }
    }
  }
  ngOnInit() {
    this.pedidosService.getPlatos().subscribe(pedidos => {
      //console.log(platos);
      //this.filter(food);
      this.pedidos = pedidos;
      this.sortPedidos();
    });
  }

}
