import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FsService } from '../fs.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
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
  disp:boolean=true;
  id:string='';

  constructor(private router: Router, private fs: FsService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.platosForm = this.formBuilder.group({
      'name' : [null, Validators.required],
      'price' : [null, Validators.required],
      'img' : [null, Validators.required],
      'disp':[true, Validators.required],
      'id':[null, Validators.required]
    });
  }
  onFormSubmit(form:NgForm) {
    this.fs.postComidas(form)
      .subscribe(res => {
          let id = res['key'];
          this.router.navigate(['/admin', id]);
        }, (err) => {
          console.log(err);
        });
  }

}
