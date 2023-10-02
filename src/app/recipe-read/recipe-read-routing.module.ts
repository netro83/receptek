import { RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {RecipeReadComponent} from "./containers/recipe-read/recipe-read.component";

const route: Routes = [
    {
        path: '',
        component: RecipeReadComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(route)],
    exports: [RouterModule]
})
export class RecipeReadRoutingModule {
}
