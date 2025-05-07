import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { map, Observable } from "rxjs";
import { TableSourceServiceBase } from "src/app/shared/table/table-source-service.base";
import { FirestoreRoutes } from "src/constants/firestore.cte";
import { AusenciaFerias, Falta } from "../models/employee.model";

@Injectable()
export class AbsenceService implements TableSourceServiceBase<Falta>
{
    constructor(private firestore: AngularFirestore) { }

    public getAbcense(employeeCpf: string)
    {
        return this.firestore.collection(FirestoreRoutes.Absences)
            .doc<AusenciaFerias>(employeeCpf)
            .valueChanges()
            .pipe(map(x => x!.ausencia));
    }

    public getItems(employeeCpf: string): Observable<Falta[] | undefined>
    {
        return this.getAbcense(employeeCpf);
    }
}