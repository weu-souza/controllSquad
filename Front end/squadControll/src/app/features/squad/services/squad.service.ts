import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { TableSourceServiceBase } from 'src/app/shared/table/table-source-service.base';
import { FirestoreRoutes } from 'src/constants/firestore.cte';
import { Squad } from '../../../api/models/squad.model';

@Injectable()
export class SquadService implements TableSourceServiceBase<Squad>
{
    constructor(private firestore: AngularFirestore) { }
    
    public getItems(): Observable<Squad[]>
    {
        return this.getSquads();
    }

    public async createSquad(request: Squad)
    {
        return await this.firestore
            .collection(FirestoreRoutes.Squads)
            .doc(request.ext).set(request, { merge: true });
    }

    public getSquads(): Observable<Squad[]>
    {
        return this.firestore
            .collection<Squad>(FirestoreRoutes.Squads)
            .valueChanges();
    }

    public getSquad(ext: string): Observable<Squad | undefined>
    {
        return this.firestore
            .collection<Squad>(FirestoreRoutes.Squads)
            .doc(ext)
            .valueChanges();
    }

    public remove(squad: Squad): Promise<void>
    {
        return this.firestore.collection(FirestoreRoutes.Squads)
            .doc(squad.ext)
            .delete();
    }
}