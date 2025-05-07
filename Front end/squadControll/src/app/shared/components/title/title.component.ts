import { AfterViewInit, ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
    selector: 'app-title',
    template: `
        <h3>{{title}}</h3>
        <hr>
    `,
    styleUrls: ['./title.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TitleComponent implements AfterViewInit
{
    @Input()
    public title: string;

    constructor() { }
    
    ngAfterViewInit(): void
    {
        if(!this.title)
            throw new Error('O título é obrigatório');
    }
}