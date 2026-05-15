import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path : "" , 

        loadComponent: () => import('../app/components/homepage/homepage').then(m => m.Homepage)
    }
];
