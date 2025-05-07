import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './title.component';

@NgModule({
  exports: [TitleComponent],
  declarations: [
    TitleComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TitleModule { }