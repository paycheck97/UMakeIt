import { Component, OnInit } from '@angular/core';
import { IProducts, IProductos, IProductos2 } from '../products';
import { Subject } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';
import { FsService } from '../fs.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  displayedColumns = ['productos', 'precio'];
  dataSource = new CarritoDataSource(this.fs);
  products: IProducts[];
  upproducts: IProducts[] = [];
  productos: IProductos[];
  productos2: IProductos2[];
  selectedProduct : Subject<any> = new Subject;
  total:number = 0;
  delit:number = 0;
  comidas={};


  constructor( private fs: FsService, private route: ActivatedRoute, private router: Router,) { 
    this.products = [
      {
        product_id : "pd100",
      
        product_name : "PadThai",
        product_price : 20,
       
        product_quality : 1
      },
      {
        product_id : "pd101",
     
        product_name : "Nuggets",
        product_price : 10,
       
        product_quality : 1
      },
      {
        product_id : "pd102",
      
        product_name : "Hamburguesa",
        product_price : 12,
        
        product_quality : 1
      },
      {
        product_id : "pd103",
      
        product_name : "Pizza",
        product_price : 20,
        product_quality : 1
      }
    ];
    this.productos = [
      {
        producto_id : "10/04/18",
      
        producto_name : "PadThai",
        producto_price : 400,
       
        producto_quality : 20
      },
      {
        producto_id : "10/05/18",
     
        producto_name : "Nuggets",
        producto_price : 100,
       
        producto_quality : 10
      },
      {
        producto_id : "14/08/18",
      
        producto_name : "Hamburguesa",
        producto_price : 104,
        
        producto_quality : 8
      },
      {
        producto_id : "25/04/18",
      
        producto_name : "Pizza",
        producto_price : 240,
        producto_quality : 12
      }
    ];
    this.productos2 = [
      {
        producto_id : "10/04/18",
      
        producto_name1 : "Nuggets, Pizza",
        producto_price : 136,
       
        producto_quality : "10, 3"
      },
      {
        producto_id : "10/05/18",
     
        producto_name1 : "Pasta",
        producto_price : 20,
       
        producto_quality : "1"
      },
      {
        producto_id : "14/08/18",
      
        producto_name1 : "Milanesa, Hamburguesa",
        producto_price : 74,
        
        producto_quality : "2, 2"
      },
      {
        producto_id : "25/04/18",
      
        producto_name1 : "Pizza, Nuggets, Pasta ",
        producto_price : 106,
        producto_quality : "3, 5, 1"
      }
    ];
   }

  ngOnInit() {
    this.totalPrice();
    this.getComidaDetails(this.route.snapshot.params['id']);

  }

  ggetpopup(det) {
    this.selectedProduct.next(det);
  }

  getComidaDetails(id) {
    this.fs.getComida(id)
      .subscribe(data => {
        console.log(data);
        this.comidas = data;
      });
  }
  deleteComida(id) {
    this.fs.deleteComidas(id)
      .subscribe(res => {
          this.router.navigate(['/carrito']);
        }, (err) => {
          console.log(err);
        }
      );
  }

  delpopup(pid){
    console.log(pid);
    for(var i=0;i<this.products.length;i++){
      if(this.products[i].product_id === pid)
      {  
        this.products.splice(i,1);
      }           
    }
    this.totalPrice();
    console.log(this.products);
  }


  totalPrice(){
    this.total = 0;
    for(var i=0;i<this.products.length;i++){
      this.total += (this.products[i].product_price * this.products[i].product_quality);
    }
  }

  add(pid){
    console.log(pid);
    for(var i=0;i<this.products.length;i++){
      if(this.products[i].product_id === pid)
      {  
        this.products[i].product_quality += 1;
      }           
    }
    this.totalPrice();
    console.log(this.products);
  }

  del(pid){
    console.log(pid);
    for(var i=0;i<this.products.length;i++){
      if(this.products[i].product_id === pid)
      {  
        this.products[i].product_quality -= 1;
      }           
    }
    this.totalPrice();
    console.log(this.products);
  }

  
}

export class CarritoDataSource extends DataSource<any> {

  constructor(private fs: FsService) {
    super()
  }

  connect() {
    return this.fs.getBoards();
  }

  disconnect() {

  }

}