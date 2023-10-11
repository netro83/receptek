import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FirebaseRecipeService} from "../../../shared/services/recipe/recipe.service";
import {Store} from "@ngrx/store";
import {getRecipeListAction} from "../../store/actions/recipe-list.action";
import {recipeListSelector} from "../../store/selectors/recipe-list.selector";
import {Router} from "@angular/router";
import {RECIPE_READ, RECIPES} from "../../../shared/constants/route.const";

@Component({
    selector: 'app-recipe-list',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

    public recipeArray$ = this.store.select(recipeListSelector);

    constructor(
        private firebaseRecipeService: FirebaseRecipeService,
        private store: Store,
        private router: Router
    ) {
    }

    ngOnInit(): void {
        this.store.dispatch(getRecipeListAction());
    }

    navigateToReadPage(id: string): void {
        this.router.navigateByUrl(`/${RECIPES}/${RECIPE_READ}/${id}`);
    }

}
