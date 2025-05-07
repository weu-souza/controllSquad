import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { tryRunPromise } from 'src/app/shared/functions';
import { DataSourceBase } from 'src/app/shared/table/datasource.base';
import { Squad } from '../../../../api/models/squad.model';
import { SquadService } from '../../services/squad.service';

@Component({
    templateUrl: './squad-list.component.html',
    styleUrls: ['./squad-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [SquadService]
})
export class SquadListComponent
{
    public displayedColumns: string[] = ['squad', 'nomeGestor', 'email', 'ext', 'actions'];
    public dataSource: DataSourceBase<Squad>;

    constructor(
        private service: SquadService,
        private snackbar: MatSnackBar)
    {
        this.dataSource = new DataSourceBase<Squad>(service);
        this.dataSource.getItems();
    }

    public async removeSquad(squad: Squad)
    {
        const [response, error] = await tryRunPromise(this.service.remove(squad));

        if(error)
            this.snackbar.open(error, undefined, {duration: 5000});
        if(response)
            this.snackbar.open('SQUAD removida com sucesso', undefined, {duration: 5000});
    }
}