import {RequestStateType} from "../../shared/types/request-state.type";

export interface RecipeListInterface {
    recipes: any;
}
export interface RecipeListInitialInterface {
    requestState: RequestStateType;
    recipes: any;
}
interface RecipeListItem {
    image: any;
    title: string;
    url: string;
    user: string;
}
