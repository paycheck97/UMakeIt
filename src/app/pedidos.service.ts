import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from "@angular/fire/firestore";
import { Pedidos } from './models/pedidos';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Food } from './models/food';


@Injectable({
  providedIn: 'root'
})
export class PedidosService {


  pedidosCollection: AngularFirestoreCollection<Pedidos>;
  pedidosDoc: AngularFirestoreDocument<Pedidos>;



  pedidos: Observable<Pedidos[]>;

  constructor(public readonly items: AngularFirestore) { 
     //this.foods = this.items.collection('platos').valueChanges();
     this.pedidosCollection = items.collection<Pedidos>('pedidos');
     this.pedidos = this.pedidosCollection.snapshotChanges().pipe(
       map(actions => actions.map(a => {
         const data = a.payload.doc.data() as Pedidos;
         const id = a.payload.doc.id;
         return { id, ...data };
       }))
     );
  }


  updatePedido(pedido: Pedidos){
    this.pedidosDoc = this.items.doc(`pedidos/${pedido.id}`);
    this.pedidosDoc.update(pedido);
  }


  getPlatos(){
    return this.pedidos;
  }
}
