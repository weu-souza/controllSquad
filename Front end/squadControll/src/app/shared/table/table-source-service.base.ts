import { Observable } from "rxjs";

export interface TableSourceServiceBase<T>
{
    getItems(args?: any): Observable<T[] | undefined>
}