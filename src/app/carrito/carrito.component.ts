import { Component, OnInit, TemplateRef } from '@angular/core';
import { CarritoService } from '../carrito.service';
import { Food } from '../models/food';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {


  
  constructor(private carritoService: CarritoService, private modalService: BsModalService) { }

  modalRef: BsModalRef;

  carrito: Food[] = this.carritoService.getCarrito();

  borrarPlato(plato:Food){
      var i = this.carrito.indexOf(plato)
      this.carrito.splice(i, 1);
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  selectedOption = '';


  display: boolean = false;

  showModal() {
   this.display = !this.display;  
  }

  add(plato: Food){
    if(plato.cant==10){
      return;
    }else plato.cant++;
  }

  sub(plato: Food){
    if(plato.cant==1){
      return;
    }else plato.cant--;
  }

  total(){
    var aux = 0;
    for(let i of this.carrito){
      aux = aux + (i.cant*i.price)
    }
    return Math.round(aux);
  }


  ngOnInit() {
  }


}
