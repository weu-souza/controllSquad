import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { FrameComponent } from './features/frame/frame.component';
import { HomeComponent } from './features/home/home.component';
import { PageTitleModule } from './shared/components/page-title/page-title.module';
import { SvgModule } from './shared/svg/svg.module';
import { PageItemModule } from './shared/components/page-item/page-item.module';
import { registerLocaleData } from '@angular/common';
import localeBr from '@angular/common/locales/pt';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { CurrencyMaskInputMode, NgxCurrencyModule } from 'ngx-currency';
import { MatIconModule } from '@angular/material/icon';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';

export const options: Partial<null | IConfig> | (() => Partial<IConfig>) = null;
export const customCurrencyMaskConfig = {
    align: 'right',
    allowNegative: true,
    allowZero: true,
    decimal: ',',
    precision: 2,
    prefix: 'R$ ',
    suffix: '',
    thousands: '.',
    nullable: true,
    min: undefined,
    max: undefined,
    inputMode: CurrencyMaskInputMode.FINANCIAL,
};

FullCalendarModule.registerPlugins([
    dayGridPlugin,
    timeGridPlugin,
    listPlugin,
    interactionPlugin,
]);

registerLocaleData(localeBr, 'pt');

@NgModule({
    declarations: [AppComponent, FrameComponent, HomeComponent],
    imports: [
        CommonModule,
        MatIconModule,
        BrowserModule,
        AppRoutingModule,
        PageTitleModule,
        SvgModule,
        PageItemModule,
        BrowserAnimationsModule,
        NgxMaskModule.forRoot(),
        NgxCurrencyModule.forRoot(customCurrencyMaskConfig),
        FullCalendarModule,
    ],
    providers: [
        {
            provide: LOCALE_ID,
            useValue: 'pt',
        },
        {
            provide: DEFAULT_CURRENCY_CODE,
            useValue: 'BRL',
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
