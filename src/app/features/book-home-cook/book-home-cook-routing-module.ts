import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingShell } from './pages/booking-shell/booking-shell';
import { BasicDetails } from './pages/basic-details/basic-details';
import { CuisineTypes } from './pages/cuisine-types/cuisine-types';
import { PersonalPreferences } from './pages/personal-preferences/personal-preferences';

const routes: Routes = [
    {
    path: '',
    component: BookingShell,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'basic-details' },
      { path: 'basic-details', component: BasicDetails, data: { step: 1 } },
      { path: 'cuisine-types', component: CuisineTypes, data: { step: 2 } },
      { path: 'personal-preferences', component: PersonalPreferences, data: { step: 3 } },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookHomeCookRoutingModule { }
