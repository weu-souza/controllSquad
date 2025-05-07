import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Employee } from 'src/app/api/models/employee.model';
import { FirebaseServiceBase } from 'src/app/api/service/firebase-service.base';
import { tryRunPromise } from 'src/app/shared/functions';
import { DataSourceBase } from 'src/app/shared/table/datasource.base';
import { EmployeesService } from '../../services/employees.service';

@Component({
    templateUrl: './employees-list.page.html',
    styleUrls: ['./employees-list.page.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [EmployeesService, FirebaseServiceBase<Employee>]
})
export class EmployeesListPage
{
    public dataSource: DataSourceBase<Employee>;
    public displayedColumns: string[] = [
        'nome', 
        'celularPessoal', 
        'cep', 
        'cidade', 
        'cpf', 
        'dataAniversario', 
        'squad', 
        'more'];

    constructor(
        private service: EmployeesService, 
        private snackbar: MatSnackBar) 
    { 
        this.dataSource = new DataSourceBase<Employee>(this.service);
        this.dataSource.getItems();
    }

    public async removeEmployee(employee: Employee)
    {
        const [response, error] = await tryRunPromise(this.service.removeEmployee(employee));

        if(error)
            this.snackbar.open(error, undefined, {duration: 5000});
        if(response)
            this.snackbar.open('Colaborador removido com sucesso', undefined, {duration: 5000});
    }
}