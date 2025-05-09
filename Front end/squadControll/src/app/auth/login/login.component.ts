import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { markAllAsDirtyAndTouched } from 'src/app/shared/functions';
import { AuthService } from 'src/app/shared/services/auth.service';

export enum LOGIN_FORM {
    email = 'email',
    password = 'password',
}

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    public loginForm: FormGroup;
    public FORM = LOGIN_FORM;

    constructor(private fb: FormBuilder, private authService: AuthService) {}

    ngOnInit(): void {
        this.loginForm = this.fb.group({
            [this.FORM.email]: ['', [Validators.required, Validators.email]],
            [this.FORM.password]: [
                '',
                [Validators.required, Validators.minLength(6)],
            ],
            checked: [false],
        });
    }

    public register(): void {
        markAllAsDirtyAndTouched(this.loginForm);

        if (this.loginForm.invalid) {
            return;
        }
        const email = this.loginForm.get(LOGIN_FORM.email)?.value;
        const password = this.loginForm.get(LOGIN_FORM.password)?.value;
        this.authService.signIn(email, password);
    }
}
