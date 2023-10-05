import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {failedTokenAction, loginAction, refreshTokenAction, saveTokenAction} from "../actions/login.actions";
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
                    this.storage.saveToStorage('userId', resp.userId);
                    return saveTokenAction({email: resp.email, token: resp.token, userId: resp.userId})
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

    refreshTokenAction$ = createEffect(() =>
        this.actions$.pipe(
            ofType(refreshTokenAction),
            switchMap(async () =>
                this.auth.refreshUser()
            ),
            map((resp: any) => {
                console.log(resp)
                return saveTokenAction({email: resp.email, token: resp.token, userId: resp.userId})
                }
            ),
            catchError(() => {
                return of(failedTokenAction())
            })
        )
    )

    constructor(
        private router: Router,
        private actions$: Actions,
        private auth: AuthService,
        private storage: StorageService
    ) {
    }
}
