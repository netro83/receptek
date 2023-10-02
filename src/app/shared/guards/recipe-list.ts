import { Injectable } from "@angular/core";
import { CanActivate, CanLoad, Router } from "@angular/router";
import { Store, props } from "@ngrx/store";
import { AuthService } from "src/app/auth/services/auth.services";

@Injectable()
export class RecipeListGuard implements CanActivate {
     constructor(
          private router: Router,
          private auth: AuthService,
          private store: Store
     ) {
     }

     canActivate(): boolean {
          const res = this.auth.getUserIsLogged();
/*
          this.store.select(loginSelectorUser).subscribe((e: LoginStoreInterface) => {
               console.log(e.requestState);
          }); */

          console.log(res);
          if (!res) {
               this.router.navigateByUrl('/auth');
          }

          return res;
     }

     getUserDataFromFirebase(): void {

     }

     // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     //     return undefined;
     // }
}
