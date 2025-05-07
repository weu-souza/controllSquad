import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CalendarOptions } from '@fullcalendar/angular';
import { AusenciaFerias, Employee, Falta } from 'src/app/api/models/employee.model';
import { Squad } from 'src/app/api/models/squad.model';
import { FirebaseServiceBase } from 'src/app/api/service/firebase-service.base';
import { FirestoreRoutes } from 'src/constants/firestore.cte';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from 'src/app/api/service/employee.service';
import { DataSourceBase } from 'src/app/shared/table/datasource.base';
import { AbsenceService } from 'src/app/api/service/absence.service';

@Component({
    selector: 'app-absence',
    templateUrl: './absence.component.html',
    styleUrls: ['./absence.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [FirebaseServiceBase<Squad>, EmployeeService, AbsenceService]
})
export class AbsenceComponent 
{
    public squads$ = this.squadService.getCollection(FirestoreRoutes.Squads);
    public employees$: Observable<Employee[]>
    public absenceForm: FormGroup;
    public employeeCpf: string;
    public dataSource: DataSourceBase<Falta>;

    public displayedColumns: string[] = [
        'dataInicio', 
        'dataTermino', 
        'justificativa'];

    public calendarOptions: CalendarOptions = {
        locale: 'pt-br',
        initialView: 'dayGridMonth',
        dateClick: this.handleDateClick.bind(this), // bind is important!
        events: [
            { title: 'Férias Fernando', date: '2022-12-04', end: '2022-12-20' },
            { title: 'Férias Rafael', date: '2022-12-12', end: '2022-12-30' },
            { title: 'event 2', date: '2022-12-25', end: '2022-12-30' }
        ]
    };

    handleDateClick(arg: any)
    {
        console.log(arg)
    }

    constructor(
        private squadService: FirebaseServiceBase<Squad>,
        private employeeService: EmployeeService,
        private absenceService: AbsenceService,
        private fb: FormBuilder) 
    {
        this.absenceForm = this.fb.group({
            dataInicio: [],
            dataTermino: [],
            justificativa: []
        })

    }

    onSquadSelected(squad: string)
    {
        this.employees$ = this.employeeService.getCollection(FirestoreRoutes.Employees);
    }

    onEmployeeSelected(employeeCpf: string)
    {
        this.employeeCpf = employeeCpf;
        this.dataSource = new DataSourceBase<Falta>(this.absenceService)
        this.dataSource.getItems(employeeCpf);
    }

    async addAbsence()
    {
        if (!this.employeeCpf)
            return;

        await this.employeeService.addAbsence(this.employeeCpf, this.absenceForm.value);
    }
}