import { AfterViewInit, ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
    selector: 'app-loading-button',
    templateUrl: './loading-button.component.html',
    styleUrls: ['./loading-button.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoadingButtonComponent implements AfterViewInit
{
    private isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    public isLoading$ = this.isLoading.asObservable();

    @Input()
    public text!: string

    @Input()
    public fn!: Function;

    @Output()
    public onClicked: EventEmitter<any> = new EventEmitter<any>();

    ngAfterViewInit(): void
    {
        if(!this.text)
            throw new Error('É preciso fornecer o texto do botão');

        if(!this.fn)
            throw new Error('É preciso fornecer a função de click do botão');
    }

    public async run(){
        this.isLoading.next(true)
        const result = await this.fn();
        this.isLoading.next(false)
        this.onClicked.emit(result);
    }
}