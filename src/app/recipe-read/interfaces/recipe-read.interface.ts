import {RequestStateType} from "../../shared/types/request-state.type";

export interface RecipeReadInterface {
    recipes: RecipeReadItem[];
}
export interface RecipeReadInitialInterface {
    requestState: RequestStateType;
    recipes: any;
}
export interface RecipeReadItem {
    image: any;
    title: string;
    url: string;
    user: string;
    id: string;
}
