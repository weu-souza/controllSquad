import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { markAllAsDirtyAndTouched } from 'src/app/shared/functions';
import { AuthService } from 'src/app/shared/services/auth.service';

export enum LOGIN_FORM
{
    email = 'email',
    password = 'password'
}

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent 
{
    public loginForm: FormGroup;
    public FORM = LOGIN_FORM;

    constructor(private fb: FormBuilder, private authService: AuthService) 
    {
        this.loginForm = this.fb.group({
            [LOGIN_FORM.email]: [null, [Validators.email, Validators.required]],
            [LOGIN_FORM.password]: [null, [Validators.required, Validators.minLength(6)]]
        })
    }

    public async register(): Promise<void>
    {
        markAllAsDirtyAndTouched(this.loginForm);

        if (this.loginForm.invalid)
            return;

        const email = this.loginForm.get(LOGIN_FORM.email)?.value;
        const password = this.loginForm.get(LOGIN_FORM.password)?.value;
        await this.authService.signIn(email, password)
    }

}
