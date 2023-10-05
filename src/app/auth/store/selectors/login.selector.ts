import {createFeatureSelector, createSelector} from "@ngrx/store";
import {LoginStoreSelectorInterface} from "../../interfaces/login.interface";

export const loginSelector = createFeatureSelector('login');
export const loginSelectorUser = createSelector(loginSelector, (props: LoginStoreSelectorInterface) => {
    return {
        requestState: props.requestState,
        token: props.token,
        email: props.email,
        userId: props.userId
    }
});
