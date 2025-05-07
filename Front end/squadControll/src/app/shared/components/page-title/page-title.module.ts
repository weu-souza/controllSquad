import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageTitleComponent } from './page-title.component';



@NgModule({
  exports: [PageTitleComponent],
  declarations: [
    PageTitleComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PageTitleModule { }
