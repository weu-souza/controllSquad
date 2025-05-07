import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RegisterRoutingModule} from './register-routing.module';
import {RegisterPage} from './pages/register.page';
import {ReactiveFormsModule} from '@angular/forms';
import {LoadingButtonModule} from 'src/app/shared/components/loading-button/loading-button.module';
import {FormErrorMessageModule} from 'src/app/shared/components/form-error-message/form-error-message.module';
import {CheckboxModule} from "primeng/checkbox";
import {InputTextModule} from "primeng/inputtext";


@NgModule({
    declarations: [
        RegisterPage
    ],
    imports: [
        CommonModule,
        RegisterRoutingModule,
        ReactiveFormsModule,
        LoadingButtonModule,
        FormErrorMessageModule,
        CheckboxModule,
        InputTextModule

    ]
})
export class RegisterModule {
}
