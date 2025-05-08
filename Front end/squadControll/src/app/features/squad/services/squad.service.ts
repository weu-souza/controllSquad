import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TableSourceServiceBase } from 'src/app/shared/table/table-source-service.base';
import { Squad } from '../../../api/models/squad.model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SquadService implements TableSourceServiceBase<Squad> {
    private apiUrl = environment.ApiUrl;
    constructor(private http: HttpClient) {}

    public getItems(): Observable<Squad[]> {
        return this.getSquads();
    }

    public async createSquad(request: Squad) {
        return this.http.post(`${this.apiUrl}/squads`, request).toPromise();
    }

    public getSquads(): Observable<Squad[]> {
        return this.http.get<Squad[]>(`${this.apiUrl}/squads`);
    }

    public getSquad(ext: string): Observable<Squad | undefined> {
        return this.http.get<Squad>(`${this.apiUrl}/squads/${ext}`);
    }

    public async remove(squad: Squad): Promise<Squad | undefined> {
        return this.http.delete<Squad>(`${this.apiUrl}/squads/${squad.ext}`).toPromise();
    }
}
