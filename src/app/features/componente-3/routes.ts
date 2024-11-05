import { Routes } from '@angular/router';
import { Componente30Component } from './componente3-0/componente3-0.component';
import { Componente31Component } from './componente3-1/componente3-1.component';
import { Componente32Component } from './componente3-2/componente3-2.component';
import { Componente33Component } from './componente3-3/componente3-3.component';

export default [
    {
      path: '',
      component: Componente30Component,
      children: [
        {
          path: 'rota3-1',
          component: Componente31Component,
        },
        {
          path: 'rota3-2',
          component: Componente32Component,
        },
        {
          path: 'rota3-3',
          component: Componente33Component,
        },
      ],
    },
  ] as Routes;