import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import {FsService} from '../fs.service'
import {DataSource} from '@angular/cdk/collections'

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent implements OnInit {
  displayedColumns = ['title', 'description', 'productos'];
  dataSource = new PlatoDataSource(this.fs);
  
  constructor(private fs: FsService) { 
   }

   ngOnInit() {

  }

}
export class PlatoDataSource extends DataSource<any>{
  constructor(private fs: FsService){
    super()
  }
  connect()
  {
    return this.fs.getPlatos();
  }
  disconnect(){

  }

}