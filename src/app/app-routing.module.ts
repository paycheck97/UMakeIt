import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { CarritoComponent } from './carrito/carrito.component';
import { ComprasComponent } from './compras/compras.component';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AdminComponent} from "./admin/admin.component";
import { BoardsComponent } from "./boards/boards.component";
import { BoardsDetailComponent } from "./boards-detail/boards-detail.component";
import { BoardsEComponent } from "./boards-e/boards-e.component";
import { BoardsEditComponent } from "./boards-edit/boards-edit.component";
import {ClaveComponent} from "./clave/clave.component";




export const routes: Routes = [
  {path:"signin", component:SigninComponent},
  {path:"clave", component:ClaveComponent},
  {path:"compras", component:ComprasComponent},
  {path:"carrito", component:CarritoComponent},
  {path: "dashboard", component:DashboardComponent},
  {path: "admin", component:AdminComponent},
  { path: '', redirectTo: '/signin', pathMatch: 'full'},
  {
    path: 'boards',
    component: BoardsComponent,
    data: { title: 'Boards List' }
  },
  {
    path: 'boards-details/:id',
    component: BoardsDetailComponent,
    data: { title: 'Boards Details' }
  },
  {
    path: 'boards-e',
    component: BoardsEComponent,
    data: { title: 'Create Boards' }
  },
  {
    path: 'boards-edit/:id',
    component: BoardsEditComponent,
    data: { title: 'Edit Boards' }
  },
  { path: '',
    redirectTo: '/boards',
    pathMatch: 'full'
  }

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
