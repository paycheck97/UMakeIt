import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FsService } from '../fs.service';
import {Food} from '../models/food';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';
import { Observable } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';
import { tap, finalize } from 'rxjs/operators';
import * as firebase from 'firebase';

@Component({
  selector: 'app-clave',
  templateUrl: './clave.component.html',
  styleUrls: ['./clave.component.css']
})
export class ClaveComponent implements OnInit {

  platosForm: FormGroup;
  name:string='';
  price:string='';
  img:string='';
  disp:boolean;
  tipo: string='';
  task: AngularFireUploadTask;
  imageUrl: string;
  downloadURL: Observable<string>;
  platos: Food[];
  plato={};
  tipos = ['Soups', 'Entrees', 'Apetizers', 'Salads', 'Beverages', 'Liquor', 'Kids Menu'];
  ref= firebase.firestore().collection('platos');

  constructor(private router: Router, private route: ActivatedRoute, private fs: FsService, private formBuilder: FormBuilder, private storage: AngularFireStorage, private db: AngularFirestore) { }

  ngOnInit() {
    this.platosForm = this.formBuilder.group({
      
      'name' : [null, Validators.required],
      'price' : [null, Validators.required],
      'disp':[true, Validators.required],
      'tipo':[null, Validators.required],
      'img':[null, Validators.required],
        
        
    });
    this.fs.getPlatos1().subscribe(food =>{
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
  
  imagen(plato: Food){
    plato.img = this.imageUrl;
    this.fs.updateFood(plato);
    console.log(plato.img);
  }

  upload(event) {
    
     const file: File = event.target.files[0];
     const metaData = {'contentType': file.type};
     const storRef: firebase.storage.Reference  = firebase.storage().ref('/MyFolder/' + file.name);
     const uploadTask: firebase.storage.UploadTask = storRef.put(file, metaData);
     console.log('Uploading:' + file.name);
 
     uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
      const imageUrl = downloadURL;
      console.log('URL:' + imageUrl);
      this.ref.doc().set(imageUrl);
    });
   
  }
 
  onFormSubmit(form:NgForm) {
 
    this.fs.postComidas(form)
      .subscribe(res => {
          let id = res['key'];
          
          this.router.navigate(['/admin']);
        }, (err) => {
          console.log(err);
        });
        
  }

}
