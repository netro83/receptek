import {Actions, createEffect, ofType} from "@ngrx/effects";
import {regUser, regUserIsFailed, regUserIsSuccess} from "../actions/reg.actions";
import {catchError, map, of, repeat, switchMap, tap} from "rxjs";
import {RegInterface, RegStoreFirebaseInterface} from "../../interfaces/reg.interface";
import {AuthService} from "../../services/auth.services";
import {StorageService} from "../../../shared/services/storage/storage.service";
import {Router} from "@angular/router";
import {AUTH, AUTH_LOGIN} from "../../../shared/constants/route.const";
import {Injectable} from "@angular/core";

@Injectable()
export class RegEffetct {

    regAction$ = createEffect(() =>
        this.action$.pipe(
            ofType(regUser),
            switchMap(async (value: RegInterface) => {
                return this.auth.registerUser({
                    email: value.email,
                    password: value.password
                });
            }),
            map((resp: RegStoreFirebaseInterface) => {
                return regUserIsSuccess()
            }),
            tap(() => {
                this.router.navigateByUrl(`${AUTH}/${AUTH_LOGIN}`)
            }),
            catchError((err) => {
                return of(regUserIsFailed())
            }),
            repeat()
        )
    )

    constructor(
        private action$: Actions,
        private auth: AuthService,
        private storage: StorageService,
        private router: Router
    ) {
    }
}
