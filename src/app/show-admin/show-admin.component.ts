import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { FsService } from '../fs.service';
import { Admin } from '../models/admin';

@Component({
  selector: 'app-show-admin',
  templateUrl: './show-admin.component.html',
  styleUrls: ['./show-admin.component.css']
})
export class ShowAdminComponent implements OnInit {
  admins: Admin[];   
  admin= {};
  
 
  constructor(private fs: FsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.fs.getAdmins().subscribe(Admin => {
      //console.log(platos);
      //this.filter(food);
      this.admins = Admin;
      this.getPlatoDetails(this.route.snapshot.params['id']);
    });
  }
  getPlatoDetails(id) {
    this.fs.getPlato(id)
      .subscribe(data => {
        console.log(data);
        this.admin = data;
      });
  }

  delete1(id){
    this.fs.deletePlatos(id)
    .subscribe(res => {
      this.router.navigate(['/show-admin']);
    }, (err) => {
      console.log(err);
    }
  );
  }

}

