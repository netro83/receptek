import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {failedTokenAction, loginAction, saveTokenAction} from "../actions/login.actions";
import {AuthService} from "../../services/auth.services";
import {catchError, map, of, repeat, switchMap, tap} from "rxjs";
import {LoginInterface, LoginStoreFirebaseInterface} from "../../interfaces/login.interface";
import {RECIPE_LIST, RECIPES} from "../../../shared/constants/route.const";
import {StorageService} from "../../../shared/services/storage/storage.service";

@Injectable()
export class LoginEffect {

    loginAction$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loginAction),
            switchMap(async (value: LoginInterface) =>
                this.auth.loginUser({
                    email: value.email,
                    password: value.password
                })
            ),
            map((resp: LoginStoreFirebaseInterface) => {
                    this.storage.saveToStorage('token', resp.token);
                    this.storage.saveToStorage('email', resp.email);
                    return saveTokenAction({email: resp.email, token: resp.token})
                }
            ),
            tap(() => {
                this.router.navigateByUrl(`${RECIPES}/${RECIPE_LIST}`)
            }),
            catchError(() => {
                return of(failedTokenAction())
            }),
            repeat()
        ));

    // saveTokenAction$ = createEffect(() =>
    //     this.actions$.pipe(
    //         ofType(saveTokenAction),
    //         tap(() => {
    //             this.router.navigateByUrl(`${RECIPES}/${RECIPE_LIST}`)
    //         })
    //     ), {dispatch: false}
    // )

    constructor(
        private router: Router,
        private actions$: Actions,
        private auth: AuthService,
        private storage: StorageService
    ) {
    }
}
