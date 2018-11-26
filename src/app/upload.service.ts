import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database'
import * as firebase from 'firebase/app';
import 'firebase/storage';
import {Uploads} from './uploads';
@Injectable({
  providedIn: 'root'
})
export class UploadService {
  private basePath = '/uploads';
 
  constructor() { }
 
 
}
