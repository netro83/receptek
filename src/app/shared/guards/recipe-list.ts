import {Injectable} from "@angular/core";
import {CanActivate, Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {AuthService} from "src/app/auth/services/auth.services";
import {failedTokenAction, saveTokenAction} from "../../auth/store/actions/login.actions";
import {StorageService} from "../services/storage/storage.service";
import {AUTH, AUTH_LOGIN} from "../constants/route.const";

@Injectable()
export class RecipeListGuard implements CanActivate {
    constructor(
        private router: Router,
        private auth: AuthService,
        private store: Store,
        private storage: StorageService
    ) {
    }

    canActivate(): boolean {
        if (this.storage.getFromStorage('token') !== null) {
            this.store.dispatch(
                saveTokenAction({
                    email: this.storage.getFromStorage('email'),
                    token: this.storage.getFromStorage('token')
                })
            );
            return true;
        } else {
            this.store.dispatch(
                failedTokenAction()
            );
            this.router.navigateByUrl(`${AUTH}/${AUTH_LOGIN}`);
            return false;
        }
    }
}
