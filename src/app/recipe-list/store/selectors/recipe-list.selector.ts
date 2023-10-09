import {createFeatureSelector, createSelector} from "@ngrx/store";
import {RecipeListInterface} from "../../interfaces/recipe-list.interface";

export const recipeSelector = createFeatureSelector('recipes');
export const recipeListSelector = createSelector(recipeSelector, (props: RecipeListInterface) => {
    return {
        recipes: props.recipes
    };
})
