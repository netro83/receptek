import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AUTH, RECIPE_LIST, RECIPE_READ} from "./shared/constants/route.const";
import {RecipeListGuard} from "./shared/guards/recipe-list";

const routes: Routes = [
    {
        path: AUTH,
        loadChildren: () => import ('./auth/auth.module').then(m => m.AuthModule)
    },
    {
        path: 'recipes',
        canActivate: [RecipeListGuard],
        children: [
            {
                path: RECIPE_LIST,
                loadChildren: () => import ('./recipe-list/recipe-list.module').then(m => m.RecipeListModule)
            },
            {
                path: RECIPE_READ,
                loadChildren: () => import ('./recipe-read/recipe-read.module').then(m => m.RecipeReadModule)
            }
        ]
    },
    {
        path: '',
        redirectTo: 'recipes/list',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
