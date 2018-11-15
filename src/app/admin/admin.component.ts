import { Component, OnInit } from '@angular/core';
import { PlatosService } from '../platos.service';
import {Food} from '../models/food';
import { ActivatedRoute, Router } from '@angular/router';
import { FsService } from '../fs.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  platos: Food[];
  plato={};

  constructor(private platosService: PlatosService, private route: ActivatedRoute, private router: Router, private fs: FsService) {
    
  }


  ngOnInit() {
    this.platosService.getPlatos().subscribe(food =>{
      this.platos = food;
      this.getPlatoDetails(this.route.snapshot.params['id']);
    });
    
  }
  
  getPlatoDetails(id) {
    this.fs.getComida(id)
      .subscribe(data => {
        console.log(data);
        this.plato = data;
      });
  }
  deletePlato(id) {
    this.fs.deleteComidas(id)
      .subscribe(res => {
          this.router.navigate(['/admin']);
        }, (err) => {
          console.log(err);
        }
      );
  }
  disp(plato: Food){
    plato.disp = !plato.disp;
    this.platosService.updateFood(plato);
  }
    


}
