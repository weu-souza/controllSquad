import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Employee } from 'src/app/api/models/employee.model';
import { TableSourceServiceBase } from 'src/app/shared/table/table-source-service.base';
import { Squad } from '../../../api/models/squad.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EmployeesService implements TableSourceServiceBase<Employee> {
    constructor(private http: HttpClient) {}

    public getItems(): Observable<Employee[]> {
        return this.getEmployees();
    }

    public getSquads(): Observable<Squad[]> {
        return this.http.get<Squad[]>('/api/squads');
    }

    public async createEmployee(employee: Employee) {
        return this.http.post('/api/employees', employee).toPromise();
    }

    public getEmployees(): Observable<Employee[]> {
        return this.http.get<Employee[]>('/api/employees');
    }

    public removeEmployee(employee: Employee) {
        return this.http
            .delete(`/api/employees/${employee.dadosPessoais.cpf}`)
            .toPromise();
    }

    public getEmployee(cpf: string): Observable<Employee> {
        return this.http.get<Employee>(`/api/employees/${cpf}`);
    }
}
