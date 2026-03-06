import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('@pages').then((m) => m.CheckoutComponent),
  },
  {
    path: 'nueva-orden',
    loadComponent: () => import('@pages').then((m) => m.OrderEntryComponent),
  },
  {
    path: 'cocina',
    loadComponent: () => import('@pages').then((m) => m.KDSComponent),
  },
];
