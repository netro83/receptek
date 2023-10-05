import {NgModule} from "@angular/core";
import {RecipeAddComponent} from "./containers/recipe-add/recipe-add.component";
import {CommonModule} from "@angular/common";
import {RecipeAddRoutingModule} from "./recipe-add-routing.module";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        RecipeAddComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RecipeAddRoutingModule
    ]
})
export class RecipeAddModule {
}
