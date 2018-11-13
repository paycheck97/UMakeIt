import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from "@angular/fire/firestore";
import { Food } from './dashboard/Food';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlatosService {

  foodCollection: AngularFirestoreCollection<Food>;
  foodDoc: AngularFirestoreDocument<Food>;



  foods: Observable<Food[]>;

  constructor(public readonly items: AngularFirestore) { 
     //this.foods = this.items.collection('platos').valueChanges();
     this.foodCollection = items.collection<Food>('platos');
     this.foods = this.foodCollection.snapshotChanges().pipe(
       map(actions => actions.map(a => {
         const data = a.payload.doc.data() as Food;
         const id = a.payload.doc.id;
         return { id, ...data };
       }))
     );
  }

  updateFood(food: Food){
    this.foodDoc = this.items.doc(`platos/${food.id}`);
    this.foodDoc.update(food);
  }

  getPlatos(){
    return this.foods;
  }
}
