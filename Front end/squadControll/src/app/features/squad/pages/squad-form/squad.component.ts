import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import {
    markAllAsDirtyAndTouched,
    patchForm,
    tryRunPromise,
} from 'src/app/shared/functions';
import { SquadService } from '../../services/squad.service';

export enum SquadForm {
    NomeGestor = 'nomeGestor',
    InicioContrato = 'inicioContrato',
    TerminoContrato = 'terminoContrato',
    Email = 'email',
    Squad = 'squad',
    Ext = 'ext',
    Celular = 'celular',
}

@Component({
    selector: 'app-squad',
    templateUrl: './squad.component.html',
    styleUrls: ['./squad.component.scss'],
    providers: [SquadService],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SquadComponent implements OnInit {
    public squadForm: FormGroup;
    public form = SquadForm;

    constructor(
        private router: ActivatedRoute,
        private snackbar: MatSnackBar,
        private fb: FormBuilder,
        private service: SquadService,
    ) {
        this.squadForm = this.fb.group({
            [SquadForm.NomeGestor]: [null, [Validators.required]],
            [SquadForm.InicioContrato]: [null, [Validators.required]],
            [SquadForm.TerminoContrato]: [null, [Validators.required]],
            [SquadForm.Email]: [null, [Validators.required]],
            [SquadForm.Squad]: [null, [Validators.required]],
            [SquadForm.Ext]: [null, [Validators.required]],
            [SquadForm.Celular]: [null, [Validators.required]],
        });
    }

    ngOnInit(): void {
        this.router.params.subscribe((params) => {
            const ext = params['ext'];
            if (!ext) return;
            this.service.getSquad(ext).subscribe((squad) => {
                if (!squad) return;
                patchForm(this.squadForm as FormGroup, squad);
            });
        });
    }

    public async cadastrar() {
        markAllAsDirtyAndTouched(this.squadForm);

        if (this.squadForm.invalid) return;

        const [_, error] = await tryRunPromise(
            this.service.createSquad(this.squadForm.value)
        );

        if (error) {
            this.snackbar.open(
                'Não foi possível cadastrar a SQUAD',
                undefined,
                { duration: 5000 }
            );
            return;
        }

        this.snackbar.open('SQUAD cadastrada com sucesso', undefined, {
            duration: 5000,
        });
        this.squadForm.reset();
    }
}
