import {createAction, props} from "@ngrx/store";
import {RegInterface} from "../../interfaces/reg.interface";

const regID = '[REG]';

export const regUser = createAction(`${regID} Register User`, props<RegInterface>());
export const regUserIsSuccess = createAction(`${regID} Register Successed`);
export const regUserIsFailed = createAction(`${regID} Register Failed`);
