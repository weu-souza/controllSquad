import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutes } from 'src/constants/app-routes.cte';
import { FrameComponent } from './features/frame/frame.component';
import { HomeComponent } from './features/home/home.component';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: AppRoutes.Login },
    { path: AppRoutes.Login, loadChildren: async () => (await import('./auth/login/login.module')).LoginModule },
    { path: AppRoutes.Register, loadChildren: async () => (await import('./auth/register/register.module')).RegisterModule },
    { path: '', canActivate: [], component: FrameComponent, children:
            [
                { path: AppRoutes.Home, component: HomeComponent },
                { path: AppRoutes.Squad, loadChildren: async () => (await import('./features/squad/squad.module')).SquadModule },
                { path: AppRoutes.Config, loadChildren: async () => (await import('./features/config/config.module')).ConfigModule },
                { path: AppRoutes.Employees, loadChildren: () => import('./features/employees/employees.module').then(m => m.EmployeesModule) },
                { path: AppRoutes.Financial, loadChildren: () => import('./features/financial/financial.module').then(m => m.FinancialModule) },
                { path: AppRoutes.Absence, loadChildren: () => import('./features/absence/absence.module').then(m => m.AbsenceModule) },
            ]
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }