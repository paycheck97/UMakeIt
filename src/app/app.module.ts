import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AngularFireModule } from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SigninComponent } from './signin/signin.component';
import { AngularFirestoreModule} from 'angularfire2/firestore';
import { environment } from 'src/environments/environment';
import { CarritoComponent } from './carrito/carrito.component';
import { ComprasComponent } from './compras/compras.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { NgxPayPalModule } from 'ngx-paypal';
import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule } from "@angular/material";
import { BoardsComponent } from './boards/boards.component';
import { BoardsDetailComponent } from './boards-detail/boards-detail.component';
import { BoardsEditComponent } from './boards-edit/boards-edit.component';
import { BoardsEComponent } from './boards-e/boards-e.component';




import {AuthService} from './auth.service';
import { ClaveComponent } from './clave/clave.component';
import { DashAdminComponent } from './dash-admin/dash-admin.component';
import { PlatoseComponent } from './platose/platose.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PaypalComponent } from './paypal/paypal.component';


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    CarritoComponent,
    ComprasComponent,
    AdminComponent,
    DashboardComponent,
    NavbarComponent,
    BoardsComponent,
    BoardsDetailComponent,
    BoardsEComponent,
    BoardsEditComponent,
    ClaveComponent,
    DashAdminComponent,
    PlatoseComponent,
    CheckoutComponent,
    PaypalComponent,
    
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    NgxPayPalModule,
    ModalModule.forRoot(),
    TooltipModule.forRoot(),
    AngularFireStorageModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyAdwL-ter_d_iHgRGPmd16vTgTk-GH_CLE",
    authDomain: "project-prod-c8b20.firebaseapp.com",
    databaseURL: "https://project-prod-c8b20.firebaseio.com",
    projectId: "project-prod-c8b20",
    storageBucket: "project-prod-c8b20.appspot.com",
    messagingSenderId: "229475320079"}),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    PopoverModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

