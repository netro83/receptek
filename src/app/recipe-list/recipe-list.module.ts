import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RecipeListRoutingModule} from "./recipe-list-routing.module";

@NgModule({
    imports: [
        CommonModule,
        RecipeListRoutingModule
    ]
})
export class RecipeListModule {
}
