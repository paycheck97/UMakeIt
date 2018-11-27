import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { CarritoComponent } from './carrito/carrito.component';
import { ComprasComponent } from './compras/compras.component';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {DashAdminComponent} from "./dash-admin/dash-admin.component";
import {AdminComponent} from "./admin/admin.component";
import { BoardsComponent } from "./boards/boards.component";
import { BoardsDetailComponent } from "./boards-detail/boards-detail.component";
import { BoardsEComponent } from "./boards-e/boards-e.component";
import { BoardsEditComponent } from "./boards-edit/boards-edit.component";
import { CheckoutComponent } from "./checkout/checkout.component";
import {ClaveComponent} from "./clave/clave.component";
import {PlatoseComponent} from "./platose/platose.component";
import {CheckService} from './check.service';
import {AddAdminComponent} from "./add-admin/add-admin.component";

import {HistorialComponent} from "./historial/historial.component";

import {ShowAdminComponent} from "./show-admin/show-admin.component";



export const routes: Routes = [
  {path:"signin", component:SigninComponent},
  {path:"clave", component:ClaveComponent},
  {path:"compras", component:ComprasComponent},
  {path:"carrito", component:CarritoComponent, canActivate: [CheckService]},
  {path: "dashboard", component:DashboardComponent, canActivate: [CheckService]},
  {path:"add-admin", component:AddAdminComponent, canActivate: [CheckService]},
  {path:"show-admin", component:ShowAdminComponent, },
  {path: "dash-admin", component:DashAdminComponent},
  {path: "admin", component:AdminComponent, canActivate: [CheckService]},
  {path: "checkout", component:CheckoutComponent},
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
    path: 'platose/:id',
    component: PlatoseComponent,
    data: { title: 'Editar Platos' }
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
  },
  {
    path: 'history',
    component: HistorialComponent
  }

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


