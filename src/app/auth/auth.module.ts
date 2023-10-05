import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {AuthRoutingModule} from "./auth-routing.module";
import {LoginComponent} from "./containers/login/login.component";
import {RegComponent} from "./containers/reg/reg.component";
import {LostpwComponent} from "./containers/lostpw/lostpw.component";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        LoginComponent,
        RegComponent,
        LostpwComponent
    ],
    imports: [
        CommonModule,
        AuthRoutingModule,
        ReactiveFormsModule
    ],
    providers: []
})
export class AuthModule {
}
