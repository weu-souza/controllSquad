import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbsenceComponent } from './pages/absence-form/absence.component';
import { FrameComponent } from './pages/frame/frame.component';

const routes: Routes = [{
  path: '', component: FrameComponent, children: [
    { path: '', component: AbsenceComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AbsenceRoutingModule { }
