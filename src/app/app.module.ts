import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { from } from 'rxjs';
import { ContactComponent } from './components/contact/contact.component';

const appRoutes: Routes = [
  {path: '', component:CarComponent},
  {path: 'contact', component:ContactComponent},
]


@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
