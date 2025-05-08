import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { TableSourceServiceBase } from 'src/app/shared/table/table-source-service.base';

import { AusenciaFerias, Falta } from '../models/employee.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class AbsenceService implements TableSourceServiceBase<Falta> {
    constructor(private http: HttpClient) {}

    private apiUrl = environment.ApiUrl;

    public getAbcense(employeeCpf: string): Observable<Falta[]> {
        return this.http
            .get<AusenciaFerias>(`${this.apiUrl}/absences/${employeeCpf}`)
            .pipe(map((response) => response.ausencia));
    }

    public getItems(employeeCpf: string): Observable<Falta[] | undefined> {
        return this.getAbcense(employeeCpf);
    }

    createAbsence(employeeCpf: string, absence: Falta): Observable<Falta> {
        return this.http.post<Falta>(
            `${this.apiUrl}/absences/${employeeCpf}`,
            absence
        );
    }
}
