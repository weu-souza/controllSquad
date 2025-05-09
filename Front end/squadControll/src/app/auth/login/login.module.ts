import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginRoutingModule} from './login-routing.module';
import {LoginComponent} from './login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {LoadingButtonModule} from 'src/app/shared/components/loading-button/loading-button.module';
import {FormErrorMessageModule} from 'src/app/shared/components/form-error-message/form-error-message.module';
import {CheckboxModule} from "primeng/checkbox";
import {InputTextModule} from "primeng/inputtext";


@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        LoginRoutingModule,
        LoadingButtonModule,
        FormErrorMessageModule,
        CheckboxModule,
        InputTextModule
    ]
})
export class LoginModule {
}
