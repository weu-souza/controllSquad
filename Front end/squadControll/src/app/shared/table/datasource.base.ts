import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, catchError, finalize, Observable, of } from 'rxjs';
import { TableSourceServiceBase } from './table-source-service.base';

export class DataSourceBase<T> implements DataSource<T> {
    private itemsSubject = new BehaviorSubject<T[]>([]);
    private loadingSubject = new BehaviorSubject<boolean>(false);
    public loading$ = this.loadingSubject.asObservable();

    constructor(private service: TableSourceServiceBase<T>) {}

    connect(collectionViewer: CollectionViewer): Observable<readonly T[]> {
        return this.itemsSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.itemsSubject.complete();
        this.loadingSubject.complete();
    }

    public getItems(args?: any) {
        this.loadingSubject.next(true);
        this.service
            .getItems(args)
            .pipe(
                catchError(() => of([])),
                finalize(() => {
                    this.loadingSubject.next(false);
                })
            )
            .subscribe((items: T[] | undefined) => {
                if (!items) return;
                this.itemsSubject.next(items);
                this.loadingSubject.next(false);
            });
    }
}
