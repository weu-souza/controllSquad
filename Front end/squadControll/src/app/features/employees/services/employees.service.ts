import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Employee } from 'src/app/api/models/employee.model';
import { TableSourceServiceBase } from 'src/app/shared/table/table-source-service.base';
import { Squad } from '../../../api/models/squad.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { AppRoutes } from 'src/constants/app-routes.cte';

@Injectable()
export class EmployeesService implements TableSourceServiceBase<Employee> {
    constructor(private http: HttpClient, private route: Router) {}
    private apiUrl = environment.ApiUrl;
    public getItems(): Observable<Employee[]> {
        return this.getEmployees();
    }

    public getSquads(): Observable<Squad[]> {
        return this.http.get<Squad[]>(`${this.apiUrl}api/squads`);
    }

    public async createEmployee(employee: Employee) {
        console.log('createEmployee', employee);
        return this.http
            .post<Employee>(`${this.apiUrl}api/employees`, employee)
            .subscribe({
                next: (response) => {
                    console.log(response);
                    this.route.navigate([AppRoutes.employeesList]);
                },
                error: (error) => {
                    window.alert(error.message);
                },
            });
    }

    public getEmployees(): Observable<Employee[]> {
        return this.http.get<Employee[]>(`${this.apiUrl}api/employees`);
    }

    public removeEmployee(employee: Employee) {
        return this.http
            .delete(`${this.apiUrl}api/employees/${employee.id}`)
            .toPromise();
    }

    public getEmployee(cpf: string): Observable<Employee> {
        return this.http.get<Employee>(`${this.apiUrl}api/employees/${cpf}`);
    }
}
