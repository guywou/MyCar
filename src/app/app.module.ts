import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { MileageEditComponent } from './mileage/mileage-edit/mileage-edit.component';
import { MileageListComponent } from './mileage/mileage-list/mileage-list.component';
import { MileageService } from './_services/mileage.service';

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      HomeComponent,
      MileageListComponent,
      MileageEditComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule
   ],
   providers: [
       MileageService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
