import { AfterViewInit, ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'app-page-item',
    templateUrl: './page-item.component.html',
    styleUrls: ['./page-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageItemComponent implements AfterViewInit
{
    @Input()
    public title!: string;
    @Input()
    public text!: string;

    ngAfterViewInit(): void
    {
        if(!this.text)
            throw new Error('É necessário informar o texto do card');
        if(!this.title)
            throw new Error('É necessário informar o título do card');
    }
}