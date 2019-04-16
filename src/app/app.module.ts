import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FormComponent } from './components/form/form.component';
import { OrdersComponent } from './components/orders/orders.component';
import { OrdersListComponent } from './components/orders/orders-list/orders-list.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { MaterialModule } from './material.module';

import { ReactiveFormsModule } from '@angular/forms';
// Firebase 
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormComponent,
    OrdersComponent,
    OrdersListComponent,
    MainMenuComponent,

  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.configFirebase),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
