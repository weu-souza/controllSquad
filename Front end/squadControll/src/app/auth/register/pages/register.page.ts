import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { markAllAsDirtyAndTouched } from 'src/app/shared/functions';
import { AuthService } from '../../../shared/services/auth.service';

export enum REGISTER_FORM{
    name = 'name',
    email = 'email',
    password = 'password'
}

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-register',
    templateUrl: './register.page.html',
    styleUrls: ['./register.page.scss']
})
export class RegisterPage implements OnInit
{
    public registerForm: FormGroup;
    public FORM = REGISTER_FORM;

    constructor(private fb: FormBuilder, private authService: AuthService) 
    {
       
    }

    ngOnInit(): void {
        this.registerForm = this.fb.group({
            [REGISTER_FORM.name]: [null, [Validators.required]],
            [REGISTER_FORM.email]: [null, [Validators.email, Validators.required]],
            [REGISTER_FORM.password]: [null, [Validators.required, Validators.minLength(6)]]
        })
        };

    public async register(): Promise<void>
    {
        markAllAsDirtyAndTouched(this.registerForm);

        if(this.registerForm.invalid)
            return;

        const name = this.registerForm.get(REGISTER_FORM.name)?.value;
        const email = this.registerForm.get(REGISTER_FORM.email)?.value;
        const password = this.registerForm.get(REGISTER_FORM.password)?.value;
        await this.authService.signUp(email, password, name)
    }
}