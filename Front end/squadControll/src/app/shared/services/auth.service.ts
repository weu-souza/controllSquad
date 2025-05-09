import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Storage } from 'src/constants/storage.cte';
import { AppRoutes } from 'src/constants/app-routes.cte';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    userData: any;
    private apiUrl = environment.ApiUrl;

    constructor(private http: HttpClient, private router: Router) {
        const user = localStorage.getItem(Storage.User);
        if (user && user !== 'null') {
            this.userData = JSON.parse(user);
            this.router.navigate([AppRoutes.Home]);
        }
    }

    signIn(email: string, password: string) {
        return this.http
            .post<any>(`${this.apiUrl}api/auth/signin`, { email, password })
            .subscribe({
                next: (response) => {
                    this.router.navigate([AppRoutes.Home]);
                    // this.setUserData(response.user);
                },
                error: (error) => {
                    window.alert(error.message);
                },
            });
    }

    signUp(email: string, password: string, name: string) {
        return this.http
            .post<any>(`${this.apiUrl}api/auth/signup`, {
                email,
                password,
                name,
            })
            .subscribe({
                next: (response) => {
                    this.signIn(email, password);
                    // this.setUserData(response.user);
                },
                error: (error) => {
                    window.alert(error.message);
                },
            });
    }

    get isLoggedIn(): boolean {
        const user = JSON.parse(localStorage.getItem(Storage.User)!);
        return user !== null;
    }

    setUserData(user: any) {
        const userData: User = {
            id: user.id,
            email: user.email,
            emailVerified: user.emailVerified,
        };
        localStorage.setItem(Storage.User, JSON.stringify(userData));
        return userData;
    }

    signOut() {
        localStorage.removeItem(Storage.User);
        this.router.navigate([AppRoutes.Login]);
    }
}
