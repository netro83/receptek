import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Router} from "@angular/router";
import {
    getRecipeListAction,
    getRecipeListFailedAction,
    getRecipeListSuccessAction
} from "../actions/recipe-list.action";
import {FirebaseRecipeService} from "../../../shared/services/recipe/recipe.service";
import {catchError, map, of, switchMap} from "rxjs";
import { RecipeListInterface} from "../../interfaces/recipe-list.interface";

@Injectable()
export class RecipeListEffect {

    recipeListAction$ = createEffect(() =>
        this.actions$.pipe(
            ofType(getRecipeListAction),
            switchMap(async () => {
                return this.firebaseRecipeService.firebaseRecipeRead()
            }),
            map((recipes: RecipeListInterface) => {
                console.log(recipes);
                return getRecipeListSuccessAction(recipes);
            }),
            catchError(() => {
                return of(getRecipeListFailedAction());
            })
        )
    )

    constructor(
        private router: Router,
        private actions$: Actions,
        private firebaseRecipeService: FirebaseRecipeService
    ) {
    }
}
