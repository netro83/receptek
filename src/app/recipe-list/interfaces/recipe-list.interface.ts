import {RequestStateType} from "../../shared/types/request-state.type";

export interface RecipeListInterface {
    recipes: RecipeListItem[];
}
export interface RecipeListInitialInterface {
    requestState: RequestStateType;
    recipes: RecipeListItem[];
}
export interface RecipeListItem {
    image: any;
    title: string;
    url: string;
    user: string;
    id: string;
}
