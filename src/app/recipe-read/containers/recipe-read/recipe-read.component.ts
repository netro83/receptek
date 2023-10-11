import {Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {getRecipeListAction} from "../../../recipe-list/store/actions/recipe-list.action";
import {ActivatedRoute} from "@angular/router";
import {recipeListSelector} from "../../../recipe-list/store/selectors/recipe-list.selector";
import {filter, map, switchMap} from "rxjs";
import {RecipeListInterface} from "../../../recipe-list/interfaces/recipe-list.interface";

@Component({
    selector: 'app-recipe-read',
    templateUrl: './recipe-read.component.html',
    styleUrls: ['./recipe-read.component.scss']
})
export class RecipeReadComponent implements OnInit {

    public recipe$: any;

    constructor(
        private store: Store,
        private activatedRoute: ActivatedRoute
    ) {
    }

    ngOnInit(): void {
        this.store.dispatch(getRecipeListAction());
        this.activatedRoute.params.pipe(
            filter(route => route['id'] !== undefined),
            switchMap((e) => {
                return this.recipe$ = this.store.pipe(
                    select(recipeListSelector),
                    map((recipes: RecipeListInterface) => {
                        return recipes.recipes.filter(g => g.id === e.id);
                    })
                );
            }),
        ).subscribe((e) => {
            console.log(e);
        });
    }

}
