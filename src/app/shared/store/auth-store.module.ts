import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { loginReducer } from "src/app/auth/store/reducers/login.reducer";

@NgModule({
     imports: [
          CommonModule,
          StoreModule.forFeature('login', loginReducer)
     ]
})
export class AuthStoreModule {

}
