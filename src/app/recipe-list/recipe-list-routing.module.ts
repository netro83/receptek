import { RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {RecipeListComponent} from "./containers/recipe-list/recipe-list.component";

const route: Routes = [
    {
        path: '',
        component: RecipeListComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(route)],
    exports: [RouterModule]
})
export class RecipeListRoutingModule {
}
