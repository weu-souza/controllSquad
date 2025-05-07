import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigRoutingModule } from './config-routing.module';
import { ConfigComponent } from './config.component';
import { PageTitleModule } from 'src/app/shared/components/page-title/page-title.module';
import { SvgModule } from 'src/app/shared/svg/svg.module';


@NgModule({
  declarations: [
    ConfigComponent
  ],
  imports: [
    CommonModule,
    ConfigRoutingModule,
    PageTitleModule,
    SvgModule,
  ]
})
export class ConfigModule { }
