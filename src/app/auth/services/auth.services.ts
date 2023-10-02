import { inject, Injectable, NgZone } from "@angular/core";
import { Router } from "@angular/router";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, UserCredential } from '@angular/fire/auth';
import { LoginInterface } from "../interfaces/login.interface";
import { Store } from "@ngrx/store";
import { loginAuthDatas } from "../store/actions/login.actions";

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

     loginUser(props: LoginInterface) {
          signInWithEmailAndPassword(this.auth, props.email, props.password)
               .then((uc: UserCredential) => {
                    this.auth.currentUser.getIdToken(true).then((token)=>{
                         this.store.dispatch(loginAuthDatas.saveData({
                              requestState: 'RESOLVED',
                              email: props.email,
                              token: token
                         }));
                    });
               })
               .catch((error) => {
                    this.store.dispatch(loginAuthDatas.saveData({
                         requestState: 'REJECTED',
                         email: props.email,
                         token: undefined
                    }));
               });
     }

     registerUser(email: string, password: string) {

     }
}
