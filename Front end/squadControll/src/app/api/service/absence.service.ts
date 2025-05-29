import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ICalendarEvent, IcalendarForm} from '../models/employee.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AbsenceService  {
    constructor(private http: HttpClient) {}

    private apiUrl = environment.ApiUrl;

    public getAbcense(): Observable<ICalendarEvent[]> {
        return this.http.get<ICalendarEvent[]>(`${this.apiUrl}abscences`);
    }

    createAbsence(absence: ICalendarEvent): Observable<IcalendarForm> {
        return this.http.post<IcalendarForm>(`${this.apiUrl}abscences`,absence);
    }
    
}
