import {createAction, props} from "@ngrx/store";

export const regUser = createAction('Register User', props<{email: string, password: string}>());
export const regUserIsSuccess = createAction('Register Successed');
export const regUserIsFailed = createAction('Register Failed');
