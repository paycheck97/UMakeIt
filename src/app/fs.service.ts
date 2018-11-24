import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase';
import firestore from 'firebase/firestore';
import { Uploads} from './uploads';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class FsService {

  ref = firebase.firestore().collection('boards');
  ref1 = firebase.firestore().collection('comprasNS');
  ref2 = firebase.firestore().collection('platos');

  constructor() { 

  }

 
  getBoards(): Observable<any> {
    return new Observable((observer) => {
      this.ref.onSnapshot((querySnapshot) => {
        let boards = [];
        querySnapshot.forEach((doc) => {
          let data = doc.data();
          boards.push({
            key: doc.id,
            title: data.title,
            description: data.description,
            author: data.author
          });
        });
        observer.next(boards);
      });
    });
  }
  
  getBoard(id: string): Observable<any> {
    return new Observable((observer) => {
      this.ref.doc(id).get().then((doc) => {
        let data = doc.data();
        observer.next({
          key: doc.id,
          title: data.title,
          description: data.description,
          author: data.author
        });
      });
    });
  }
  
  postBoards(data): Observable<any> {
    return new Observable((observer) => {
      this.ref.add(data).then((doc) => {
        observer.next({
          key: doc.id,
        });
      });
    });
  }
  
  updateBoards(id: string, data): Observable<any> {
    return new Observable((observer) => {
      this.ref.doc(id).set(data).then(() => {
        observer.next();
      });
    });
  }
  
  deleteBoards(id: string): Observable<{}> {
    return new Observable((observer) => {
      this.ref.doc(id).delete().then(() => {
        observer.next();
      });
    });
  }

  getPlatos(): Observable<any> {
    return new Observable((observer) => {
      this.ref1.onSnapshot((querySnapshot) => {
        let platos = [];
        querySnapshot.forEach((doc) => {
          let data = doc.data();
          platos.push({
            key: doc.id,
            title: data.preciototal,
            description: data.cliente,
            productos: data.productos,
            
          });
        });
        observer.next(platos);
      });
    });
  }
  
  getPlato(id: string): Observable<any> {
    return new Observable((observer) => {
      this.ref1.doc(id).get().then((doc) => {
        let data = doc.data();
        observer.next({
          key: doc.id,
          title: data.preciototal,
            description: data.cliente,
            productos: data.productos,
        });
      });
    });
  }
  
  postPlatos(data): Observable<any> {
    return new Observable((observer) => {
      this.ref1.add(data).then((doc) => {
        observer.next({
          key: doc.id,
        });
      });
    });
  }
  
  updatePlatos(id: string, data): Observable<any> {
    return new Observable((observer) => {
      this.ref1.doc(id).set(data).then(() => {
        observer.next();
      });
    });
  }
  
  deletePlatos(id: string): Observable<{}> {
    return new Observable((observer) => {
      this.ref1.doc(id).delete().then(() => {
        observer.next();
      });
    });
  }
  getComidas(): Observable<any> {
    return new Observable((observer) => {
      this.ref2.onSnapshot((querySnapshot) => {
        let comidas = [];
        querySnapshot.forEach((doc) => {
          let data = doc.data();
          comidas.push({
            key: doc.id,
            name: data.name,
            price: data.price,
            disp: data.disp,
            img: data.img,
          });
        });
        observer.next(comidas);
      });
    });
  }
  
  getComida(id: string): Observable<any> {
    return new Observable((observer) => {
      this.ref2.doc(id).get().then((doc) => {
        let data = doc.data();
        observer.next({
          key: doc.id,
          name: data.name,
            price: data.price,
            disp: data.disp,
            img: data.img,
        });
      });
    });
  }
  
  postComidas(data): Observable<any> {
    return new Observable((observer) => {
      this.ref2.add(data).then((doc) => {
        observer.next({
          key: doc.id,
        });
      });
    });
  }
  
  updateComidas(id: string, data): Observable<any> {
    return new Observable((observer) => {
      this.ref2.doc(id).set(data).then(() => {
        observer.next();
      });
    });
  }
  
  deleteComidas(id: string): Observable<{}> {
    return new Observable((observer) => {
      this.ref2.doc(id).delete().then(() => {
        observer.next();
      });
    });
  }
}
