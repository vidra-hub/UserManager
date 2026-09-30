import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'users' },
  { path: 'users', loadComponent: () => import('./pages/users/users').then(m => m.Users) },
  { path: '**', redirectTo: 'users' },
];
