import {createAction, props} from "@ngrx/store";

const regID = '[REG]';

export const regUser = createAction(`${regID} Register User`, props<{email: string, password: string}>());
export const regUserIsSuccess = createAction(`${regID} Register Successed`);
export const regUserIsFailed = createAction(`${regID} Register Failed`);
