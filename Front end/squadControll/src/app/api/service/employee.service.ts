import { Injectable } from '@angular/core';
import { AusenciaFerias, Employee } from '../models/employee.model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class EmployeeService {
    private apiUrl = environment.ApiUrl;
    constructor(private http: HttpClient) {}
    public addAbsence(employeeCpf: string, ausencia: AusenciaFerias) {
        return this.http.post(
            `${this.apiUrl}/absences/${employeeCpf}`,
            ausencia
        );
    }

    getAllEmployees(): Observable<Employee[]> {
        return this.http.get<Employee[]>(`${this.apiUrl}/employees`);
    }
}
