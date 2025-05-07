import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeSvgComponent} from './home-svg.component';
import {SquadSvgComponent} from './squad-svg.component';
import {SquadTitleSvgComponent} from './squad-title-svg.component';
import {EmployeesSvgComponent} from './employees-svg.component';
import {EmployeesTitleSvgComponent} from './employees-title-svg.component';
import {ConfigSvgComponent} from './config-svg.components';
import {HomeSvgIconComponent} from './home-svg-icon.components';
import {CalendarIconComponent} from './icons/calendar-icon.component';
import {DollarIconComponent} from './icons/dollar-icon.component';
import {AbsenceTitleComponentSvg} from './page-title/absence-title.component';
import {LogoutSvgComponent} from "./logout-svg.components";

const svgs = [
    SquadSvgComponent,
    ConfigSvgComponent,
    HomeSvgComponent,
    AbsenceTitleComponentSvg,
    SquadTitleSvgComponent,
    EmployeesSvgComponent,
    CalendarIconComponent,
    DollarIconComponent,
    HomeSvgIconComponent,
    LogoutSvgComponent,
    EmployeesTitleSvgComponent];

@NgModule({
    declarations: [...svgs],
    exports: [...svgs],
    imports: [CommonModule]
})
export class SvgModule {
}