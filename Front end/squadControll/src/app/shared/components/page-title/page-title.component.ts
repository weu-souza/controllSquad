import { AfterViewInit, ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-page-title',
    templateUrl: './page-title.component.html',
    styleUrls: ['./page-title.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageTitleComponent implements AfterViewInit
{
    @Input()
    public title: string;
    @Input()
    public text: string;

    ngAfterViewInit(): void
    {
        if(!this.title)
            throw new Error('É preciso fornecer o título da página');
        if(!this.text)
            throw new Error('É preciso fornecer o texto de descrição');
    }
}
