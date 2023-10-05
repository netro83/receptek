import {inject, Injectable, NgZone} from "@angular/core";
import {Router} from "@angular/router";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {
    Auth,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    UserCredential
} from '@angular/fire/auth';
import {LoginInterface} from "../interfaces/login.interface";
import {Store} from "@ngrx/store";
import {RegInterface} from "../interfaces/reg.interface";

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private auth: Auth = inject(Auth);

    constructor(
        private router: Router,
        private afAuth: AngularFireAuth,
        private ngZone: NgZone,
        private store: Store
    ) {

    }

    ngOnInit(): void {

    }

    getUserIsLogged(): boolean {
        return this.auth.currentUser !== null;
    }

    refreshUser(): Promise<any> {
        return new Promise((resolve, reject) => {
            onAuthStateChanged(
                this.auth,
                (uc: any) => {
                    console.log(uc);
                    resolve({token: uc.accessToken, email: uc.email});
                }),
                (error) => {

                }
        });
    }

    loginUser(props: LoginInterface): Promise<any> {
        return new Promise((resolve, reject) => {
            signInWithEmailAndPassword(this.auth, props.email, props.password)
                .then((uc: UserCredential) => {
                    this.auth.currentUser.getIdToken(true).then((token) => {
                        resolve({token: token, email: props.email});
                    });
                })
                .catch((error) => {
                    reject(error)
                });
        });
    }

    registerUser(props: RegInterface): Promise<any> {
        return new Promise((resolve, reject) => {
            createUserWithEmailAndPassword(this.auth, props.email, props.password)
                .then((uc: UserCredential) => {
                    this.auth.currentUser.getIdToken(true).then((token) => {
                        resolve({token: token, email: props.email});
                    });
                })
                .catch((error) => {
                    // console.log(error);
                    reject(new Error(error))
                })
        });
    }
}
