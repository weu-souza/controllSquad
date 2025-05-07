import { Injectable } from '@angular/core';
import { User } from './user';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Storage } from 'src/constants/storage.cte';
import { AppRoutes } from 'src/constants/app-routes.cte';


@Injectable({
    providedIn: 'root',
})
export class AuthService
{
    userData: any;

    constructor(
        public firestore: AngularFirestore,
        public fireAuth: AngularFireAuth,
        public router: Router)
    {
        this.fireAuth.authState.subscribe(user =>
        {
            if (user)
            {
                this.userData = user;
                localStorage.setItem(Storage.User, JSON.stringify(this.userData));
                JSON.parse(localStorage.getItem(Storage.User)!);
                this.router.navigate([AppRoutes.Home])
            } 
            else
            {
                localStorage.setItem(Storage.User, 'null');
                JSON.parse(localStorage.getItem(Storage.User)!);
            }
        });
    }


    signIn(email: string, password: string)
    {
        return this.fireAuth
            .signInWithEmailAndPassword(email, password)
            .then(result =>
            {
                this.setUserData(result.user);
                this.fireAuth.authState.subscribe((user) =>
                {
                    if (user)
                    {
                        this.router.navigate([AppRoutes.Home]);
                    }
                });
            })
            .catch(error =>
            {
                window.alert(error.message);
            });
    }

    signUp(email: string, password: string, name: string)
    {
        return this.fireAuth
            .createUserWithEmailAndPassword(email, password)
            .then((result:any) =>
            {
                // this.sendVerificationMail();
                result.user._delegate.displayName  = name;
                this.fireAuth.updateCurrentUser(result.user._delegate)
                this.setUserData(result.user._delegate);
                this.signIn(email, password);
            })
            .catch((error) =>
            {
                window.alert(error.message);
            });
    }

    sendVerificationMail()
    {
        return this.fireAuth.currentUser
            .then((u: any) => u.sendEmailVerification())
            .then(() =>
            {
                this.router.navigate(['verify-email-address']);
            });
    }

    forgotPassword(passwordResetEmail: string)
    {
        return this.fireAuth
            .sendPasswordResetEmail(passwordResetEmail)
            .then(() =>
            {
                window.alert('Password reset email sent, check your inbox.');
            })
            .catch((error) =>
            {
                window.alert(error);
            });
    }

    get isLoggedIn(): boolean
    {
        const user = JSON.parse(localStorage.getItem(Storage.User)!);
        return user !== null ? true : false;
    }

    setUserData(user: any)
    {
        const firestoreDoc = FirestoreRoutes.UserByEmail.replace(':email', user.email)
        const userRef = this.firestore.doc(firestoreDoc);

        const userData: User = {
            uid: user.uid,
            email: user.email,
            emailVerified: user.emailVerified,
        };
        return userRef.set(userData, {
            merge: true,
        });
    }

    signOut() {
        return this.fireAuth.signOut().then(() => {
            console.log('Signed Out');
            localStorage.removeItem(Storage.User);
            this.router.navigate([AppRoutes.Login]);
        });
    }
}