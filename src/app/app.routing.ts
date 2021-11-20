import { Routes } from '@angular/router';


export const AppRoutes: Routes = [

    {
        path: 'account',
        children: [
            {
                path: 'sign-in',
                loadChildren: () => import('src/app/modules/auth/auth.module').then(m => m.AuthModule)
            }
        ]
    }


];