import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrameComponent } from '../employees/pages/frame/frame.component';
import { EmployeesFormPage } from './pages/employees-form/employees-form.page';
import { EmployeesListPage } from './pages/employees-list/employees-list.page';

const routes: Routes = [
    {path: '', component: FrameComponent, children: [
        { path: 'list', component: EmployeesListPage },
        { path: ':cpf', component: EmployeesFormPage },
        { path: '', component: EmployeesFormPage },
    ]}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EmployeesRoutingModule { }