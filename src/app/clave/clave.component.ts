import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FsService } from '../fs.service';
import { Uploads} from '../uploads';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { UploadService } from '../upload.service';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
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
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;

  constructor(private router: Router, private fs: FsService, private formBuilder: FormBuilder, private afStorage: AngularFireStorage ) { }

  ngOnInit() {
    this.platosForm = this.formBuilder.group({
      'name' : [null, Validators.required],
      'price' : [null, Validators.required],
      'img' : [null, Validators.required],
      'disp':[null, Validators.required],
      'tipo':[null, Validators.required],
      
    });
  }

  
  upload(event) {
    const file = event.target.files[0];
    const filePath = 'name-your-file-path-here';
    const fileRef = this.afStorage.ref(filePath);
    const task = this.afStorage.upload(filePath, file);

    // observe percentage changes
    this.uploadPercent = task.percentageChanges();
    // get notified when the download URL is available
    task.snapshotChanges().pipe(
        finalize(() => this.downloadURL = fileRef.getDownloadURL() )
     )
    .subscribe()
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
