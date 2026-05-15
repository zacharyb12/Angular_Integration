import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path : "" , 

        loadComponent: () => import('../app/components/homepage/homepage').then(m => m.Homepage)
    },
    {
        path : 'products',
        loadComponent : () => import('../app/components/products/products').then(m => m.Products)
    },
    {
        path : 'register',
        loadComponent : () => import('../app/components/register/register').then(m => m.Register)
    }
];
