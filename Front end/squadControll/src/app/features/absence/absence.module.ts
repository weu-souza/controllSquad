import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AbsenceRoutingModule } from './absence-routing.module';
import { SvgModule } from 'src/app/shared/svg/svg.module';
import { FrameComponent } from './pages/frame/frame.component';
import { PageTitleModule } from 'src/app/shared/components/page-title/page-title.module';
import { TitleModule } from 'src/app/shared/components/title/title.module';
import { MatTableModule } from '@angular/material/table';
import { FullCalendarModule } from '@fullcalendar/angular';
import { AbsenceComponent } from './pages/absence-form/absence.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
@NgModule({
    declarations: [AbsenceComponent, FrameComponent],
    imports: [
        CommonModule,
        AbsenceRoutingModule,
        TitleModule,
        PageTitleModule,
        SvgModule,
        MatTableModule,
        FullCalendarModule,
        ReactiveFormsModule,
        NgxMaskModule,
    ],
})
export class AbsenceModule {}
