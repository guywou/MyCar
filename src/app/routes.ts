import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MileageEditComponent } from './mileage/mileage-edit/mileage-edit.component';
import { MileageListComponent } from './mileage/mileage-list/mileage-list.component';

export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'mileageEdit', component: MileageEditComponent },
    { path: 'mileageList', component: MileageListComponent },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
