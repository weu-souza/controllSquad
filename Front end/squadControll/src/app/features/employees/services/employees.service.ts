import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/api/models/employee.model';
import { TableSourceServiceBase } from 'src/app/shared/table/table-source-service.base';
import { FirestoreRoutes } from 'src/constants/firestore.cte';
import { Squad } from '../../../api/models/squad.model';

@Injectable()
export class EmployeesService implements TableSourceServiceBase<Employee>
{
    constructor(private firestore: AngularFirestore) { }

    public getItems(): Observable<Employee[]>
    {
        return this.getEmployees();
    }

    public getSquads()
    {
        return this.firestore.collection<Squad>(FirestoreRoutes.Squads).valueChanges()
    }

    public async createEmployee(employee: Employee)
    {
        return await this.firestore
            .collection(FirestoreRoutes.Employees)
            .doc(employee.dadosPessoais.cpf)
            .set(employee, { merge: true })
    }

    public getEmployees()
    {
        return this.firestore
            .collection<Employee>(FirestoreRoutes.Employees)
            .valueChanges();
    }

    public removeEmployee(employee: Employee)
    {
        return this.firestore
            .collection(FirestoreRoutes.Employees)
            .doc(employee.dadosPessoais.cpf)
            .delete();
    }

    public getEmployee(cpf: string)
    {
        return this.firestore.collection(FirestoreRoutes.Employees)
            .doc<Employee>(cpf)
            .valueChanges();
    }
}