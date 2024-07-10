import { Routes } from '@angular/router';
import { TabsComponent } from './tabs.component';

export const routes: Routes = [
    {
        path: 'menu',
        component: TabsComponent,
        children: [
            {
                path: ':id',
                    loadComponent: () =>
                        import('../../pages/page.component').then((m) => m.PageComponent),
            },
            {
                path: '',
                redirectTo: '/menu/inbox',
                pathMatch: 'full'
            },
        ]
    },
    {
        path: '',
        redirectTo: '/menu/inbox',
        pathMatch: 'full'
    },
];
