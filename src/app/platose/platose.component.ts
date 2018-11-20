import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute} from '@angular/router';
import { FsService } from '../fs.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-platose',
  templateUrl: './platose.component.html',
  styleUrls: ['./platose.component.css']
})

export class PlatoseComponent implements OnInit {

  platosForm: FormGroup;
  name:string='';
  price:string='';
  img:string='';
  disp:boolean;
  id: string='';

  constructor(private router: Router, private route: ActivatedRoute, private fs: FsService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getComida(this.route.snapshot.params['id']);
      this.platosForm = this.formBuilder.group({
      'name' : [null, Validators.required],
      'price' : [null, Validators.required],
      'img' : [null, Validators.required],
      'disp':[null, Validators.required],
      
    });
  } 
  
  getComida(id) {
    this.fs.getComida(id).subscribe(data => {
      this.id = data.key;
      this.platosForm.setValue({
        name: data.name,
        price: data.price,
        img: data.img,
        disp: data.disp,
      });
    });
  }
  onFormSubmit(form:NgForm) {
    this.fs.updateComidas(this.id, form)
      .subscribe(res => {
          this.router.navigate(['/admin']);
        }, (err) => {
          console.log(err);
        }
      );
  }
  
}
