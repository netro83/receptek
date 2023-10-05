import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {RecipeAddComponent} from "./containers/recipe-add/recipe-add.component";

const route: Routes = [
    {
        path: '',
        component: RecipeAddComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(route)],
    exports: [RouterModule]
})
export class RecipeAddRoutingModule {
}
