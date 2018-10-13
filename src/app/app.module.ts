import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { MileageEditComponent } from './mileage/mileage-edit/mileage-edit.component';
import { MileageListComponent } from './mileage/mileage-list/mileage-list.component';
import { MileageService } from './_services/mileage.service';
import { appRoutes } from './routes';
import { AlertifyService } from './_services/alertify.service';

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
      HttpClientModule,
      RouterModule.forRoot(appRoutes),
      ReactiveFormsModule,
      FormsModule
   ],
   providers: [
       AlertifyService,
       MileageService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
