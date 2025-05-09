import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TableSourceServiceBase } from 'src/app/shared/table/table-source-service.base';
import { Squad } from '../../../api/models/squad.model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AppRoutes } from 'src/constants/app-routes.cte';

@Injectable()
export class SquadService implements TableSourceServiceBase<Squad> {
    private apiUrl = environment.ApiUrl;
    constructor(private http: HttpClient, private route: Router) {}

    public getItems(): Observable<Squad[]> {
        return this.getSquads();
    }

    public async createSquad(request: Squad) {
        return this.http.post(`${this.apiUrl}api/squads`, request).subscribe({
            next: (response) => {
                this.route.navigate([AppRoutes.list]);
            },
            error: (error) => {
                window.alert(error.message);
            },
        });
    }

    public getSquads(): Observable<Squad[]> {
        return this.http.get<Squad[]>(`${this.apiUrl}api/squads`);
    }

    public getSquad(id: number): Observable<Squad | undefined> {
        return this.http.get<Squad>(`${this.apiUrl}api/squads/${id}`);
    }

    public async remove(squad: Squad) {
        return this.http
            .delete<Squad>(`${this.apiUrl}api/squads/${squad.id}`)
            .subscribe({
                next: (response) => {
                },
                error: (error) => {
                    window.alert(error.message);
                },
            });
    }
}
