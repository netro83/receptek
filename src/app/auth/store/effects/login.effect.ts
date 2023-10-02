import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {loginAction, PostLoginAction} from "../actions/login.actions";
import {AuthService} from "../../services/auth.services";
import {switchMap} from "rxjs";

@Injectable()
export class LoginEffect {

    loginAction$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loginAction)
        ));

    constructor(
        private route: Router,
        private actions$: Actions,
        private auth: AuthService
    ) {
    }
}
