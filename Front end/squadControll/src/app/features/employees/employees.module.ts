import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesRoutingModule } from './employees-routing.module';
import { TitleModule } from 'src/app/shared/components/title/title.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FrameComponent } from './pages/frame/frame.component';
import { PageTitleModule } from 'src/app/shared/components/page-title/page-title.module';
import { SvgModule } from 'src/app/shared/svg/svg.module';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgxCurrencyModule } from "ngx-currency";
import { EmployeesFormPage } from './pages/employees-form/employees-form.page';
import { NgxMaskModule } from 'ngx-mask';
import { LoadingButtonModule } from 'src/app/shared/components/loading-button/loading-button.module';
import { FormErrorMessageModule } from 'src/app/shared/components/form-error-message/form-error-message.module';
import { EmployeesListPage } from './pages/employees-list/employees-list.page';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [
    EmployeesFormPage,
    EmployeesListPage,
    FrameComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    TitleModule,
    ReactiveFormsModule,
    PageTitleModule,
    SvgModule,
    MatChipsModule,
    MatIconModule,
    MatSnackBarModule,
    NgxCurrencyModule,
    NgxMaskModule,
    LoadingButtonModule,
    FormErrorMessageModule,
    MatTableModule,
    MatMenuModule
  ]
})
export class EmployeesModule { }