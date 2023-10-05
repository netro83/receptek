import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RecipeListRoutingModule} from "./recipe-list-routing.module";
import {RecipeListComponent} from "./containers/recipe-list/recipe-list.component";

@NgModule({
    declarations:[
        RecipeListComponent
    ],
    imports: [
        CommonModule,
        RecipeListRoutingModule
    ],
    providers: []
})
export class RecipeListModule {
}
