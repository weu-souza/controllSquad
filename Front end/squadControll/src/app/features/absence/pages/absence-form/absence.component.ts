import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { CalendarOptions, FullCalendarComponent } from '@fullcalendar/angular';
import { ICalendarEvent } from 'src/app/api/models/employee.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AbsenceService } from 'src/app/api/service/absence.service';

@Component({
    selector: 'app-absence',
    templateUrl: './absence.component.html',
    styleUrls: ['./absence.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [AbsenceService],
})
export class AbsenceComponent implements OnInit {
    public absenceForm: FormGroup;
    public calendarEvents: ICalendarEvent[] = [];

    handleDateClick(arg: any) {
        console.log(arg);
    }

    constructor(
        private absenceService: AbsenceService,
        private fb: FormBuilder,
        private cdr: ChangeDetectorRef
    ) {}

    createForm() {
        this.absenceForm = this.fb.group({
            start: ['', Validators.required],
            end: ['', Validators.required],
            cpf: ['', Validators.required],
        });
    }
    public calendarOptions: CalendarOptions = {
        locale: 'pt-br',
        initialView: 'dayGridMonth',
        dateClick: this.handleDateClick.bind(this),
        events: [],
    };

    ngOnInit(): void {
        this.createForm();
        this.getEmployeeAbscence();
    }

    getEmployeeAbscence() {
        this.absenceService.getAbcense().subscribe({
            next: (absences) => {
                this.calendarEvents = absences.map((absence) => ({
                    title: `ferias de - ${absence.title}`,
                    start: absence.start,
                    end: absence.end,
                }));
                this.calendarOptions.events = this.calendarEvents;
                this.cdr.detectChanges();
            },
            error: (error) => {
                console.error('Error fetching absences:', error);
            },
        });
    }

    async addAbsence() {
        if (!this.absenceForm.valid) {
            console.error('Form is invalid');
            return;
        }
        console.log('Form submitted:', this.absenceForm.value);

        try {
            const response = await firstValueFrom(
                this.absenceService.createAbsence(this.absenceForm.value)
            );
            console.log('Absence created:', response);
            this.getEmployeeAbscence();
            this.absenceForm.reset();
        } catch (error) {
            console.error('Error creating absence:', error);
        }
    }
}
