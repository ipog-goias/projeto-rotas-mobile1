import { Routes } from '@angular/router';
import { Componente1Component } from './features/componente-1/componente-1.component';

export const routes: Routes = [
    {
        path: 'rota1',
        component: Componente1Component,
        title: 'Componente 1',
      },
      {
        path: 'rota2',
        title: 'Componente 2',
        loadComponent: () => import('./features/componente-2/componente-2.component')
        .then(c => c.Componente2Component)
      },
      {
        path: 'rota3',
        title: 'Componente 3',
        loadChildren: () => import('./features/componente-3/routes')
      },
      {
        path: 'rota4',
        title: 'Componente 4',
        data: {
          name: 'Faculdade IPOG'
        },
        loadComponent: () => import('./features/componente-4/componente-4.component')
        .then(c => c.Componente4Component)
      }
];
