import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RecipeReadRoutingModule} from "./recipe-read-routing.module";
import {RecipeReadComponent} from "./containers/recipe-read/recipe-read.component";

@NgModule({
    declarations: [
        RecipeReadComponent
    ],
    imports: [
        CommonModule,
        RecipeReadRoutingModule,
    ]
})
export class RecipeReadModule {
}
