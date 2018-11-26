import { Injectable } from '@angular/core';
import { Food } from './models/food';
import { Pedidos } from './models/pedidos';
import { PedidosService } from './pedidos.service';
import {AuthService} from './auth.service';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {


  constructor(private authService: AuthService, private afs:AngularFirestore) { }

  total: number = 0;
  carrito = [];
  pedido:Pedidos;
  
  addCarrito(plato: Food){
    var aux = 0;

    for(let i of this.carrito){
      if(i.name == plato.name){
        if(i.cant == 10){
          return;
        }
        i.cant++;
        aux++;
      }
    }
    if(aux==0){
      plato.cant = 1;
      this.carrito.push(plato);  
    }
  }

  getCarrito(){
    return this.carrito;
  }

  updateTotal(total:number){
    this.total = total;
    return this.total;
  }

  getTotal(){
    if(this.total==0){
      return 1;
    }
    return this.total;
  }


  
  makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }
  
  generarPedido(){
    var ordenes= "";
    for(let carro of this.carrito){
      ordenes = ordenes + carro.name + " x" + carro.cant + " ";
    }
    this.carrito = [];
    var user = this.authService.getUser();
    var pedido:Pedidos;
    pedido = {platos:ordenes, mail:user,total:this.total};
    
    this.addPedido(pedido);
    console.log(pedido);
  }

  addPedido(pedido:Pedidos){

    var id = this.makeid();

    this.afs.collection("pedidos").doc(id).set({
    mail: pedido.mail,
    platos: pedido.platos,
    total: pedido.total,
    status: false
  });
  }


}

