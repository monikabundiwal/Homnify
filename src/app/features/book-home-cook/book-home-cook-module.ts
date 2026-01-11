import { Routes } from '@angular/router';

export const BOOK_HOME_COOK_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/booking-shell/booking-shell').then(m => m.BookingShell),
    children: [
      {
        path: 'basic-details',
        loadComponent: () =>
          import('./pages/basic-details/basic-details').then(m => m.BasicDetails),
      },
      {
        path: 'cuisine-types',
        loadComponent: () =>
          import('./pages/cuisine-types/cuisine-types').then(m => m.CuisineTypes),
      },
      {
        path: 'personal-preferences',
        loadComponent: () =>
          import('./pages/personal-preferences/personal-preferences').then(m => m.PersonalPreferences),
      },
      { path: '', pathMatch: 'full', redirectTo: 'basic-details' },
    ],
  },
];
