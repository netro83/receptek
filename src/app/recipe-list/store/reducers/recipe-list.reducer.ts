import {createReducer, on} from "@ngrx/store";
import {initialRecipeListReducer} from "./recipe-list.state";
import {
    getRecipeListAction,
    getRecipeListFailedAction,
    getRecipeListSuccessAction
} from "../actions/recipe-list.action";
import {RecipeListInterface} from "../../interfaces/recipe-list.interface";

export const recipeListReducer = createReducer(
    initialRecipeListReducer,
    on(getRecipeListAction, (_state: RecipeListInterface, {}) => {
        return {..._state, requestState: 'PENDING'}
    }),
    on(getRecipeListSuccessAction, (_state: RecipeListInterface, {recipes}) => {
        return {..._state, requestState: 'RESOLVED', recipes: recipes}
    }),
    on(getRecipeListFailedAction, (_state: RecipeListInterface, {})=>{
        return {..._state, requestState: 'REJECTED'}
    })
)
