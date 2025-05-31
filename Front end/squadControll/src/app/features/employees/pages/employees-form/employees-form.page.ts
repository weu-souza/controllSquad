import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import {
    markAllAsDirtyAndTouched,
    patchForm,
    tryRunPromise,
} from 'src/app/shared/functions';
import { EmployeesService } from '../../services/employees.service';
import { Observable } from 'rxjs';
import { Squad } from 'src/app/api/models/squad.model';

@Component({
    selector: 'app-employees',
    templateUrl: './employees-form.page.html',
    styleUrls: ['./employees-form.page.scss'],
    providers: [EmployeesService],
})
export class EmployeesFormPage implements OnInit {
    public employeeForm: FormGroup;
    public squads$: Observable<Squad[]> | undefined = undefined;

    public get techs(): FormArray {
        return this.employeeForm.get('tecnologias') as FormArray;
    }

    constructor(
        private router: ActivatedRoute,
        private fb: FormBuilder,
        private service: EmployeesService,
        private snackbar: MatSnackBar
    ) {}

    ngOnInit(): void {
        this.employeeForm = this.fb.group({
            dadosPessoais: this.fb.group({
                nome: [null, [Validators.required]],
                dataAniversario: [null, [Validators.required]],
                telefone: [null, []],
                celular: [null, [Validators.required]],
                estado: [null, [Validators.required]],
                cidade: [null, [Validators.required]],
                cpf: [null, [Validators.required]],
                rg: [null, [Validators.required]],
                orgaoEmissor: [null, [Validators.required]],
                cep: [null, [Validators.required]],
                logradouro: [null, [Validators.required]],
                complemento: [null, []],
                numero: [null, [Validators.required]],
            }),
            empresa: this.fb.group({
                celular: [null, []],
                dataAdmissao: [null, [Validators.required]],
                tarifa: [null, [Validators.required]],
                gestor: [null, [Validators.required]],
                unidadeNegocio: [null, [Validators.required]],
                numeroSap: [null, [Validators.required]],
                email: [null, [Validators.required,Validators.email]],
                emailCurto: [null, [Validators.required]],
            }),
            cliente: this.fb.group({
                racf: [null, [Validators.required]],
                funcional: [null, [Validators.required]],
                squad: [null, [Validators.required]],
                email: [null, [Validators.required,Validators.email]],
            }),
        });
        this.squads$ = this.service.getSquads();
        this.router.params.subscribe((params) => {
            const cpf = params['cpf'];
            if (!cpf) return;

            this.service.getEmployee(cpf).subscribe((e) => {
                const dadosPessoais = this.employeeForm.get(
                    'dadosPessoais'
                )! as FormGroup;
                const empresa = this.employeeForm.get('empresa')! as FormGroup;
                const cliente = this.employeeForm.get('cliente')! as FormGroup;

                patchForm(dadosPessoais, e?.dadosPessoais);
                patchForm(empresa, e?.empresa);
                patchForm(cliente, e?.cliente);
            });
        });
    }

    public onTechSelected(selectedTech: string): void {
        const tech = this.fb.group({ nome: [selectedTech] });
        this.techs.push(tech);
    }

    public remove(techIndex: number): void {
        this.techs.removeAt(techIndex);
    }

    public async send(): Promise<void> {
        const dadosPessoais = this.employeeForm.get(
            'dadosPessoais'
        )! as FormGroup;
        const empresa = this.employeeForm.get('empresa')! as FormGroup;
        const cliente = this.employeeForm.get('cliente')! as FormGroup;
        markAllAsDirtyAndTouched(dadosPessoais);
        markAllAsDirtyAndTouched(empresa);
        markAllAsDirtyAndTouched(cliente);

        if (this.employeeForm.invalid) return;

        console.log(this.employeeForm.value);
        const [_, error] = await tryRunPromise(
            this.service.createEmployee(this.employeeForm.value)
        );

        if (error) {
            this.snackbar.open(
                'Não foi possível cadastrar o colaborador',
                undefined,
                { duration: 5000 }
            );
            return;
        }

        this.snackbar.open('Colaborador cadastrado com sucesso', undefined, {
            duration: 5000,
        });
        this.employeeForm.reset();
        this.techs.clear();
    }
}
