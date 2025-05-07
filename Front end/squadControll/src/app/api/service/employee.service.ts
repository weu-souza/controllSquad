import { Injectable } from "@angular/core";
import { FirestoreRoutes } from "src/constants/firestore.cte";
import { AusenciaFerias, Employee } from "../models/employee.model";
import { FirebaseServiceBase } from "./firebase-service.base";

@Injectable()
export class EmployeeService extends FirebaseServiceBase<Employee>
{
    public addAbsence(employeeCpf: string, ausencia: AusenciaFerias)
    {
        this.firestore
            .collection(FirestoreRoutes.Absences)
            .doc(employeeCpf)
            .valueChanges()
    }
}