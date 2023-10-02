import { RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {AUTH_LOGIN, AUTH_LOSTPW, AUTH_REG} from "../shared/constants/route.const";
import {LoginComponent} from "./containers/login/login.component";
import {RegComponent} from "./containers/reg/reg.component";
import {LostpwComponent} from "./containers/lostpw/lostpw.component";

const route: Routes = [
    {
        path: AUTH_LOGIN,
        component: LoginComponent
    },
    {
      path: AUTH_REG,
      component: RegComponent
    },
    {
      path: AUTH_LOSTPW,
      component: LostpwComponent
    },
    {
        path: '',
        redirectTo: AUTH_LOGIN,
        pathMatch: 'full'
    }
]

@NgModule({
    imports: [RouterModule.forChild(route)],
    exports: [RouterModule]
})
export class AuthRoutingModule {
}
