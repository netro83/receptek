import {Component, OnInit} from '@angular/core';
import {FirebaseRecipeService} from "../../../shared/services/recipe/recipe.service";
import {Store} from "@ngrx/store";
import {getRecipeListAction} from "../../store/actions/recipe-list.action";
import {recipeListSelector} from "../../store/selectors/recipe-list.selector";

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

    public recipeArray$ =  this.store.select(recipeListSelector);

    constructor(
        private firebaseRecipeService: FirebaseRecipeService,
        private store: Store
    ) {
    }

    ngOnInit(): void {
        this.store.dispatch(getRecipeListAction());

    }

}
