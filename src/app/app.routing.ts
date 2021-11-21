import { Routes } from '@angular/router';
import { DashboardComponent } from './modules/dashboard/dashboard.component';

export const AppRoutes: Routes = [

    {
        path: 'account',
        children: [
            {
                path: 'sign-in',
                loadChildren: () => import('src/app/modules/auth/auth.module').then(m => m.AuthModule)
            }
        ]
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        loadChildren: () => import('src/app/modules/dashboard/dashboard.module').then(m => m.DashboardModule)
    }


];