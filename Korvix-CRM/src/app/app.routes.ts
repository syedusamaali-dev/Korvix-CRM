import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },

  {
    path: 'login',
    loadComponent: () =>
      import('./features/login/login').then(m => m.Login)
  },

  {
    path: '',
    loadComponent: () =>
      import('./layout/layout/layout').then(m => m.Layout),

    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./features/dashboard/dashboard').then(m => m.Dashboard)
      }
    ]
  },

  {
    path: '**',
    redirectTo: 'dashboard'
  }

];