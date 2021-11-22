import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'roles'
    },
    {
        path: 'roles',
        loadChildren: () => import('./roles/roles.module').then(m => m.RolesModule),
    },
    {
        path: 'aircrafts',
        loadChildren: () => import('./aircrafts/aircrafts.module').then(m => m.AircraftsModule),
    },
    {
        path: 'pilots',
        loadChildren: () => import('./pilot/pilot.module').then(m => m.PilotModule),
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule {}
