import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {StoreModule} from "@ngrx/store";
import {loginReducer} from "src/app/auth/store/reducers/login.reducer";
import {EffectsModule} from "@ngrx/effects";
import {LoginEffect} from "../../auth/store/effects/login.effect";
import {RegEffetct} from "../../auth/store/effects/reg.effetct";
import {regReducer} from "../../auth/store/reducers/reg.reducer";

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature('login', loginReducer),
        StoreModule.forFeature('reg', regReducer),
        EffectsModule.forFeature([LoginEffect, RegEffetct])
    ]
})
export class AuthStoreModule {

}
