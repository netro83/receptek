import { createFeature, createFeatureSelector, createSelector } from "@ngrx/store";

export const loginSelector = createFeatureSelector('login');
export const loginSelectorUser = createSelector(loginSelector, ({ requestState, token, email }) => {
     return { requestState, token, email }
});