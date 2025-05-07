import { Injectable } from "@angular/core";
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentSnapshot } from "@angular/fire/compat/firestore";
import { map } from "@firebase/util";
import { lastValueFrom, Observable, take } from "rxjs";

@Injectable()
export class FirebaseServiceBase<T>
{
    constructor(protected readonly firestore: AngularFirestore) { }

    public async upInsertItem(item: any, collection: string, doc: string)
    {
        return await this.getCollectionRef(collection)
            .doc(doc)
            .set(item, { merge: true })
    }

    public getCollection(collection: string): Observable<T[]>
    {
        return this.firestore
            .collection<T>(collection)
            .valueChanges();
    }

    public getDocRef(collection: string, doc: string): AngularFirestoreDocument<T>
    {
        return this.getCollectionRef(collection)
            .doc<T>(doc);
    }

    public getDoc(collection: string, doc: string): Observable<any>
    {
        return this.getCollectionRef(collection)
            .doc(doc)
            .get()
            .pipe(take(1));
    }

    public getDocValueChanges(collection: string, doc: string): Observable<T | undefined>
    {
        return this.getCollectionRef(collection)
            .doc<T>(doc)
            .valueChanges();
    }

    public removeDoc(collection: string, doc: string): Promise<void>
    {
        return this.getCollectionRef(collection)
            .doc(doc)
            .delete();
    }

    private getCollectionRef(collection: string): AngularFirestoreCollection<T>
    {
        return this.firestore.collection<T>(collection);
    }
}