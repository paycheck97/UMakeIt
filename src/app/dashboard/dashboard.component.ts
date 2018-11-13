import { Component, OnInit, TemplateRef } from '@angular/core';
import { PlatosService } from '../platos.service';
import { Food } from '../dashboard/Food';
import { FsService } from '../fs.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  sortFood = 'Sort Food';
  selectedFood = '';
  platos: Food[];

  constructor(private platosService:PlatosService, private fs: FsService, private route: ActivatedRoute, private router: Router,) { 
    
  }


  selectChangeHandler(event: any){
    this.selectedFood = event.target.value;
  }
 
  disp(plato: Food){
    plato.disp = !plato.disp;
    this.platosService.updateFood(plato);
  }
  ngOnInit() {
    this.platosService.getPlatos().subscribe(food => {
      //console.log(platos);
      this.platos = food;
    });
    
  }

}