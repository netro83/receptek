import { inject, Injectable, NgZone } from "@angular/core";
import { Router } from "@angular/router";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, UserCredential, getIdToken } from '@angular/fire/auth';
import { LoginInterface } from "../interfaces/login.interface";
import { Store } from "@ngrx/store";
import { TokenService } from "src/app/shared/services/token/token.service";

@Injectable({
     providedIn: 'root',
})
export class AuthService {
     private auth: Auth = inject(Auth);

     constructor(
          private router: Router,
          private afAuth: AngularFireAuth,
          private ngZone: NgZone,
          private store: Store,
          private token: TokenService
     ) {

     }

     ngOnInit(): void {

     }

     getUserIsLogged(): boolean {
          if (this.auth.currentUser === null) {
               return false;
          } else {
               return true;
          }
     }

     loginUser(props: LoginInterface): void {
          signInWithEmailAndPassword(this.auth, props.email, props.password)
               .then((uc: UserCredential) => {
                    this.auth.currentUser.getIdToken(true).then((token) => {
                         this.token.saveToken(token);
                         // this.store.dispatch(loginAuthDatas.saveData({
                         //      requestState: 'RESOLVED',
                         //      email: props.email,
                         //      token: token
                         // }));
                    });
               })
               .catch((error) => {
                    // this.store.dispatch(loginAuthDatas.saveData({
                    //      requestState: 'REJECTED',
                    //      email: props.email,
                    //      token: undefined
                    // }));
               });
     }

     registerUser(email: string, password: string): void {

     }
}
