import {RequestStateType} from "../../shared/types/request-state.type";

export interface RecipeListInterface {
    recipes: Array<RecipeListItemInterface>;
}
export interface RecipeListInitialInterface {
    requestState: RequestStateType;
    recipes: RecipeListItemInterface[];
}
export interface RecipeListItemInterface {
    image: any;
    title: string;
    url: string;
    user: string;
    id: string;
}


