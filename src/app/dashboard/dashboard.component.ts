import { Component, OnInit } from '@angular/core';
import { PlatosService } from '../platos.service';
import { CarritoService } from '../carrito.service';
import { Food } from '../models/food';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  sortFood = 'Sort Food';
  selectedFood = 'Show All';
  platos: Food[];

  aux: Food[];
  


  constructor(private platosService:PlatosService, private carritoService: CarritoService) { }

  selectChangeHandler(event: any){
    this.selectedFood = event.target.value;
  }


  disp(plato: Food){
    plato.disp = !plato.disp;
    this.platosService.updateFood(plato);
  }
 
  addCarrito(plato: Food){
    this.carritoService.addCarrito(plato);
  }




  ngOnInit() {
    this.platosService.getPlatos().subscribe(food => {
      //console.log(platos);
      //this.filter(food);
      this.platos = food;
    });
    
  }
}