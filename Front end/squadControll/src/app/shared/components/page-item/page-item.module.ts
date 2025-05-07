import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageItemComponent } from './page-item.component';



@NgModule({
  exports:[PageItemComponent],
  declarations: [
    PageItemComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PageItemModule { }
