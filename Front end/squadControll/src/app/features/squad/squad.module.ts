import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SquadRoutingModule } from './squad-routing.module';
import { PageTitleModule } from 'src/app/shared/components/page-title/page-title.module';
import { SvgModule } from 'src/app/shared/svg/svg.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SquadComponent } from './pages/squad-form/squad.component';
import { SquadListComponent } from './pages/squad-list/squad-list.component';
import { FrameComponent } from './pages/frame/frame.component';
import { LoadingButtonModule } from 'src/app/shared/components/loading-button/loading-button.module';
import { MatTableModule } from '@angular/material/table';
import { TitleModule } from 'src/app/shared/components/title/title.module';
import { FormErrorMessageModule } from 'src/app/shared/components/form-error-message/form-error-message.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgxMaskModule } from 'ngx-mask';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
@NgModule({
  declarations: [
    SquadComponent,
    SquadListComponent,
    FrameComponent
  ],
  imports: [
    CommonModule,
    SquadRoutingModule,
    PageTitleModule,
    SvgModule,
    ReactiveFormsModule,
    LoadingButtonModule,
    MatSnackBarModule,
    MatTableModule,
    TitleModule,
    FormErrorMessageModule,
    NgxMaskModule,
    MatProgressSpinnerModule
  ]
})
export class SquadModule { }