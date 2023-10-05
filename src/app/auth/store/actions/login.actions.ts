import {createAction, props} from '@ngrx/store';

const loginID = '[LOGIN]';

export const checkTokenAction = createAction(`${loginID} Check the storage`);

export const loginAction = createAction(`${loginID} Login to firebase DB`, props<{ email: string, password: string }>());

export const saveTokenAction = createAction(`${loginID} Save Data`, props<{ email: string, token: string }>());

export const failedTokenAction = createAction(`${loginID} Failed Save Data`);

export const refreshTokenAction = createAction(`${loginID} Refresh User Token`)
