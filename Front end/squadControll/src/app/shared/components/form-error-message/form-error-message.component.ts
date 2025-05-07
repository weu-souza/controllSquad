import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
    selector: 'app-form-error-message',
    templateUrl: './form-error-message.component.html',
    styleUrls: ['./form-error-message.component.scss']
})
export class FormErrorMessageComponent
{
    @Input()
    public formMessage!: AbstractControl | null;

    public get errors(): string[] | null
    {
        let errorMessages: string[] = [];

        if(!this.formMessage?.touched || !this.formMessage?.dirty)
            return null;
        
        if(!this.formMessage)
            return null;
        
        const errors = this.formMessage.errors;
        
        if (!errors)
            return null;
        
        for(const propertyName in errors)
        {
            const errorMessage = this.getErrorMessage(propertyName, this.formMessage.errors![propertyName]);
            errorMessages.push(errorMessage);
        }

        return errorMessages
    }

    private getErrorMessage(validatorName: string, error: any = null)
    {
        const listOfErrors: any = {
            'required': 'Este campo é obrigatório.',
            'email': 'E-mail inválido.',
            'max': `Valor máximo ${error?.max}. Valor atual ${error?.actual}.`,
            'min': `Valor mínimo ${error?.min}. Valor atual ${error?.actual}.`,
            'maxlength': `Valor máximo ${error?.requiredLength} de caracteres. Valor atual ${error?.actualLength}.`,
            'minlength': `Valor mínimo ${error?.requiredLength} de caracteres. Valor atual ${error?.actualLength}.`
        }
        return listOfErrors[validatorName]
    }
}