import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrameComponent } from './pages/frame/frame.component';
import { SquadComponent } from './pages/squad-form/squad.component';
import { SquadListComponent } from './pages/squad-list/squad-list.component';

const routes: Routes = [
    { path: '', component: FrameComponent, 
        children: [
            { path: 'list', component: SquadListComponent },
            { path: ':ext', component: SquadComponent },
            { path: '', component: SquadComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SquadRoutingModule { }