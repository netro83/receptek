import {Injectable} from "@angular/core";
import {CanActivate, CanLoad, Router} from "@angular/router";

@Injectable()
export class RecipeListGuard implements CanActivate {
    constructor(
        private router: Router
    ) {
    }

    canActivate(): boolean {
        const res = true;
        console.log(res);
        if (!res) {
            this.router.navigateByUrl('/auth');
        }

        return res;
    }

    // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //     return undefined;
    // }
}
