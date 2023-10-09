import {createAction, props} from "@ngrx/store";
import { RecipeListInterface} from "../../interfaces/recipe-list.interface";

const recipeListId = '[RECIPES]';

export const getRecipeListAction = createAction(`${recipeListId} Get recipes`);
export const getRecipeListSuccessAction = createAction(`${recipeListId} Recipes Success`, props<RecipeListInterface>());
export const getRecipeListFailedAction = createAction(`${recipeListId} Recipes Failed`);
